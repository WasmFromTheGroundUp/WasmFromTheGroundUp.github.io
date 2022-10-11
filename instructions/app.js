//@format
/*globals Set*/
import {createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.40/vue.esm-browser.prod.min.js';
import {INSTRUCTIONS} from '../data/instructions.js';

async function main() {
  const app = createApp({
    data() {
      return {
        searchText: '',
        tags: {},
        visibleInstructions: [],
      };
    },
    methods: {
      toggleTag(tag, isAlt) {
        const newValue = !this.tags[tag];
        if (isAlt) {
          for (let key in this.tags) {
            this.tags[key] = newValue;
          }
        } else {
          this.tags[tag] = newValue;
        }
        this.refilterWithText(this.searchText);
      },
      refilter(e) {
        this.refilterWithText(e.target.value);
      },
      refilterWithText(searchTextRaw) {
        const searchText = searchTextRaw.trim().toLowerCase(),
          withText =
            searchText === ''
              ? allInstructions
              : allInstructions.filter((instr, _i, _) =>
                  instr.searchText.includes(searchText)
                ),
          activeTags = [];

        for (let tag in this.tags) {
          if (this.tags[tag]) {
            activeTags.push(tag);
          }
        }

        this.searchText = searchTextRaw;
        this.visibleInstructions = withText.filter((instr, _i, _) =>
          hasAnyTag(instr, activeTags)
        );
      },
    },
  }).mount('#app');

  function hasAnyTag(instr, tags) {
    const instrTags = instr.tags;

    for (let tag of tags) {
      if (instrTags.has(tag)) {
        return true;
      }
    }

    return false;
  }
  const resp = await fetch('../data/instruction-tags.json'),
    tags = await resp.json(),
    allTags = new Set(),
    allInstructions = Object.entries(INSTRUCTIONS).map(
      ([name, {args, opCode}]) => {
        const argsStr = args.join(', '),
          opCodeHex = opCode.toString(16),
          instrTags = tags[name] ?? [];

        return {
          name,
          args,
          argsStr,
          opCode,
          opCodeHex,
          tags: new Set(instrTags),
          searchText: [name, opCodeHex, argsStr, instrTags.join('\n')]
            .join('\n')
            .toLowerCase(),
        };
      }
    ),
    instructionsByTag = {};

  for (let key in tags) {
    for (let tag of tags[key]) {
      allTags.add(tag);
      if (instructionsByTag[tag] === undefined) {
        instructionsByTag[tag] = [];
      }

      instructionsByTag[tag].push(key);
    }
  }

  const allTagsActive = {},
    allTagsArray = Array.from(allTags).sort();

  for (let tag of allTagsArray) {
    allTagsActive[tag] = true;
  }

  app.visibleInstructions = Array.from(allInstructions);
  app.tags = allTagsActive;
}

main();
