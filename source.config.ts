import { rehypeCode } from "fumadocs-core/mdx-plugins";
import { remarkInstall } from "fumadocs-docgen";
import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const { docs, meta } = defineDocs();

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [[remarkInstall, { persist: { id: "package-manager" } }]],
    rehypePlugins: [rehypeCode],
    rehypeCodeOptions: {
      themes: {
        light: {
          colors: {
            "actionBar.toggledBackground": "#ebebeb",
            "activityBarBadge.background": "#0068d6",
            "checkbox.border": "#ebebeb",
            "editor.background": "#ffffff",
            "editor.foreground": "#171717",
            "editor.inactiveSelectionBackground": "#0000001a",
            "editor.selectionHighlightBackground": "#0000001a",
            "editorIndentGuide.activeBackground": "#cccccc",
            "editorIndentGuide.background": "#ebebeb",
            "input.placeholderForeground": "#666666",
            "list.activeSelectionIconForeground": "#171717",
            "list.dropBackground": "#0000001a",
            "menu.background": "#ffffff",
            "menu.border": "#ebebeb",
            "menu.foreground": "#171717",
            "menu.separatorBackground": "#ebebeb",
            "ports.iconRunningProcessForeground": "#297a3a",
            "sideBarSectionHeader.background": "#f9f9f9",
            "sideBarSectionHeader.border": "#ebebeb",
            "sideBarTitle.foreground": "#666666",
            "statusBarItem.remoteBackground": "#f9f9f9",
            "statusBarItem.remoteForeground": "#171717",
            "tab.lastPinnedBorder": "#ebebeb",
            "terminal.inactiveSelectionBackground": "#0000001a",
            "widget.border": "#ebebeb",
          },
          displayName: "Vercel Light",
          name: "vercel-light",
          semanticHighlighting: true,
          semanticTokenColors: {
            customLiteral: "#7c00c7",
            newOperator: "#bd2864",
            numberLiteral: "#0068d6",
            stringLiteral: "#297a3a",
          },
          tokenColors: [
            {
              scope: [
                "meta.embedded",
                "source.groovy.embedded",
                "string meta.image.inline.markdown",
                "variable.legacy.builtin.python",
              ],
              settings: {
                foreground: "#171717",
              },
            },
            {
              scope: "emphasis",
              settings: {
                fontStyle: "italic",
              },
            },
            {
              scope: "strong",
              settings: {
                fontStyle: "bold",
              },
            },
            {
              scope: "header",
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: "comment",
              settings: {
                foreground: "#666666",
              },
            },
            {
              scope: "constant.language",
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: [
                "constant.numeric",
                "variable.other.enummember",
                "keyword.operator.plus.exponent",
                "keyword.operator.minus.exponent",
              ],
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: "constant.regexp",
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: "entity.name.tag",
              settings: {
                foreground: "#297a3a",
              },
            },
            {
              scope: "entity.name.tag.css",
              settings: {
                foreground: "#7c00c7",
              },
            },
            {
              scope: "entity.other.attribute-name",
              settings: {
                foreground: "#7c00c7",
              },
            },
            {
              scope: [
                "entity.other.attribute-name.class.css",
                "entity.other.attribute-name.class.mixin.css",
                "entity.other.attribute-name.id.css",
                "entity.other.attribute-name.parent-selector.css",
                "entity.other.attribute-name.pseudo-class.css",
                "entity.other.attribute-name.pseudo-element.css",
                "source.css.less entity.other.attribute-name.id",
                "entity.other.attribute-name.scss",
              ],
              settings: {
                foreground: "#7c00c7",
              },
            },
            {
              scope: "invalid",
              settings: {
                foreground: "#bd2864",
              },
            },
            {
              scope: "markup.underline",
              settings: {
                fontStyle: "underline",
              },
            },
            {
              scope: "markup.bold",
              settings: {
                fontStyle: "bold",
                foreground: "#0068d6",
              },
            },
            {
              scope: "markup.heading",
              settings: {
                fontStyle: "bold",
                foreground: "#0068d6",
              },
            },
            {
              scope: "markup.italic",
              settings: {
                fontStyle: "italic",
              },
            },
            {
              scope: "markup.strikethrough",
              settings: {
                fontStyle: "strikethrough",
              },
            },
            {
              scope: "markup.inserted",
              settings: {
                foreground: "#297a3a",
              },
            },
            {
              scope: "markup.deleted",
              settings: {
                foreground: "#bd2864",
              },
            },
            {
              scope: "markup.changed",
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: "punctuation.definition.quote.begin.markdown",
              settings: {
                foreground: "#666666",
              },
            },
            {
              scope: "punctuation.definition.list.begin.markdown",
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: "markup.inline.raw",
              settings: {
                foreground: "#297a3a",
              },
            },
            {
              scope: "punctuation.definition.tag",
              settings: {
                foreground: "#666666",
              },
            },
            {
              scope: ["meta.preprocessor", "entity.name.function.preprocessor"],
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: "meta.preprocessor.string",
              settings: {
                foreground: "#297a3a",
              },
            },
            {
              scope: "meta.preprocessor.numeric",
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: "meta.structure.dictionary.key.python",
              settings: {
                foreground: "#7c00c7",
              },
            },
            {
              scope: "meta.diff.header",
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: "storage",
              settings: {
                foreground: "#bd2864",
              },
            },
            {
              scope: "storage.type",
              settings: {
                foreground: "#bd2864",
              },
            },
            {
              scope: ["storage.modifier", "keyword.operator.noexcept"],
              settings: {
                foreground: "#bd2864",
              },
            },
            {
              scope: ["string", "meta.embedded.assembly"],
              settings: {
                foreground: "#297a3a",
              },
            },
            {
              scope: "string.tag",
              settings: {
                foreground: "#297a3a",
              },
            },
            {
              scope: "string.value",
              settings: {
                foreground: "#297a3a",
              },
            },
            {
              scope: "string.regexp",
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: [
                "punctuation.definition.template-expression.begin",
                "punctuation.definition.template-expression.end",
                "punctuation.section.embedded",
              ],
              settings: {
                foreground: "#171717",
              },
            },
            {
              scope: ["meta.template.expression"],
              settings: {
                foreground: "#171717",
              },
            },
            {
              scope: [
                "support.type.vendored.property-name",
                "support.type.property-name",
                "variable.css",
                "variable.scss",
                "variable.other.less",
                "source.coffee.embedded",
              ],
              settings: {
                foreground: "#7c00c7",
              },
            },
            {
              scope: "keyword",
              settings: {
                foreground: "#bd2864",
              },
            },
            {
              scope: "keyword.control",
              settings: {
                foreground: "#bd2864",
              },
            },
            {
              scope: "keyword.operator",
              settings: {
                foreground: "#bd2864",
              },
            },
            {
              scope: [
                "keyword.operator.new",
                "keyword.operator.expression",
                "keyword.operator.cast",
                "keyword.operator.sizeof",
                "keyword.operator.alignof",
                "keyword.operator.typeid",
                "keyword.operator.alignas",
                "keyword.operator.instanceof",
                "keyword.operator.logical.python",
                "keyword.operator.wordlike",
              ],
              settings: {
                foreground: "#bd2864",
              },
            },
            {
              scope: "keyword.other.unit",
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: [
                "punctuation.section.embedded.begin.php",
                "punctuation.section.embedded.end.php",
              ],
              settings: {
                foreground: "#bd2864",
              },
            },
            {
              scope: "support.function.git-rebase",
              settings: {
                foreground: "#7c00c7",
              },
            },
            {
              scope: "constant.sha.git-rebase",
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: [
                "storage.modifier.import.java",
                "variable.language.wildcard.java",
                "storage.modifier.package.java",
              ],
              settings: {
                foreground: "#171717",
              },
            },
            {
              scope: "variable.language",
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: [
                "entity.name.function",
                "support.function",
                "support.constant.handlebars",
                "source.powershell variable.other.member",
                "entity.name.operator.custom-literal",
              ],
              settings: {
                foreground: "#7c00c7",
              },
            },
            {
              scope: [
                "support.class",
                "support.type",
                "entity.name.type",
                "entity.name.namespace",
                "entity.other.attribute",
                "entity.name.scope-resolution",
                "entity.name.class",
                "storage.type.numeric.go",
                "storage.type.byte.go",
                "storage.type.boolean.go",
                "storage.type.string.go",
                "storage.type.uintptr.go",
                "storage.type.error.go",
                "storage.type.rune.go",
                "storage.type.cs",
                "storage.type.generic.cs",
                "storage.type.modifier.cs",
                "storage.type.variable.cs",
                "storage.type.annotation.java",
                "storage.type.generic.java",
                "storage.type.java",
                "storage.type.object.array.java",
                "storage.type.primitive.array.java",
                "storage.type.primitive.java",
                "storage.type.token.java",
                "storage.type.groovy",
                "storage.type.annotation.groovy",
                "storage.type.parameters.groovy",
                "storage.type.generic.groovy",
                "storage.type.object.array.groovy",
                "storage.type.primitive.array.groovy",
                "storage.type.primitive.groovy",
              ],
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: [
                "meta.type.cast.expr",
                "meta.type.new.expr",
                "support.constant.math",
                "support.constant.dom",
                "support.constant.json",
                "entity.other.inherited-class",
              ],
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: [
                "keyword.control",
                "source.cpp keyword.operator.new",
                "keyword.operator.delete",
                "keyword.other.using",
                "keyword.other.directive.using",
                "keyword.other.operator",
                "entity.name.operator",
              ],
              settings: {
                foreground: "#bd2864",
              },
            },
            {
              scope: [
                "variable",
                "meta.definition.variable.name",
                "support.variable",
                "entity.name.variable",
                "constant.other.placeholder",
              ],
              settings: {
                foreground: "#171717",
              },
            },
            {
              scope: ["variable.other.constant", "variable.other.enummember"],
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: ["meta.object-literal.key"],
              settings: {
                foreground: "#7c00c7",
              },
            },
            {
              scope: [
                "support.constant.property-value",
                "support.constant.font-name",
                "support.constant.media-type",
                "support.constant.media",
                "constant.other.color.rgb-value",
                "constant.other.rgb-value",
                "support.constant.color",
              ],
              settings: {
                foreground: "#297a3a",
              },
            },
            {
              scope: [
                "punctuation.definition.group.regexp",
                "punctuation.definition.group.assertion.regexp",
                "punctuation.definition.character-class.regexp",
                "punctuation.character.set.begin.regexp",
                "punctuation.character.set.end.regexp",
                "keyword.operator.negation.regexp",
                "support.other.parenthesis.regexp",
              ],
              settings: {
                foreground: "#297a3a",
              },
            },
            {
              scope: [
                "constant.character.character-class.regexp",
                "constant.other.character-class.set.regexp",
                "constant.other.character-class.regexp",
                "constant.character.set.regexp",
              ],
              settings: {
                foreground: "#bd2864",
              },
            },
            {
              scope: [
                "keyword.operator.or.regexp",
                "keyword.control.anchor.regexp",
              ],
              settings: {
                foreground: "#7c00c7",
              },
            },
            {
              scope: "keyword.operator.quantifier.regexp",
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: ["constant.character", "constant.other.option"],
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: "constant.character.escape",
              settings: {
                foreground: "#0068d6",
              },
            },
            {
              scope: "entity.name.label",
              settings: {
                foreground: "#171717",
              },
            },
          ],
          type: "light",
        },
        dark: {
          colors: {
            "actionBar.toggledBackground": "#242424",
            "activityBarBadge.background": "#52a8ff",
            "checkbox.border": "#242424",
            "editor.background": "#0a0a0a",
            "editor.foreground": "#ededed",
            "editor.inactiveSelectionBackground": "#ffffff1a",
            "editor.selectionHighlightBackground": "#ffffff33",
            "editorIndentGuide.activeBackground": "#333333",
            "editorIndentGuide.background": "#242424",
            "input.placeholderForeground": "#a1a1a1",
            "list.activeSelectionIconForeground": "#ededed",
            "list.dropBackground": "#ffffff1a",
            "menu.background": "#000000",
            "menu.border": "#242424",
            "menu.foreground": "#ededed",
            "menu.separatorBackground": "#242424",
            "ports.iconRunningProcessForeground": "#62c073",
            "sideBarSectionHeader.background": "#101010",
            "sideBarSectionHeader.border": "#242424",
            "sideBarTitle.foreground": "#a1a1a1",
            "statusBarItem.remoteBackground": "#101010",
            "statusBarItem.remoteForeground": "#ededed",
            "tab.lastPinnedBorder": "#242424",
            "terminal.inactiveSelectionBackground": "#ffffff1a",
            "widget.border": "#242424",
          },
          displayName: "Vercel Dark",
          name: "vercel-dark",
          semanticHighlighting: true,
          semanticTokenColors: {
            customLiteral: "#c472fb",
            newOperator: "#f75f8f",
            numberLiteral: "#52a8ff",
            stringLiteral: "#62c073",
          },
          tokenColors: [
            {
              scope: [
                "meta.embedded",
                "source.groovy.embedded",
                "string meta.image.inline.markdown",
                "variable.legacy.builtin.python",
              ],
              settings: {
                foreground: "#ededed",
              },
            },
            {
              scope: "emphasis",
              settings: {
                fontStyle: "italic",
              },
            },
            {
              scope: "strong",
              settings: {
                fontStyle: "bold",
              },
            },
            {
              scope: "header",
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: "comment",
              settings: {
                foreground: "#a1a1a1",
              },
            },
            {
              scope: "constant.language",
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: [
                "constant.numeric",
                "variable.other.enummember",
                "keyword.operator.plus.exponent",
                "keyword.operator.minus.exponent",
              ],
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: "constant.regexp",
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: "entity.name.tag",
              settings: {
                foreground: "#62c073",
              },
            },
            {
              scope: "entity.name.tag.css",
              settings: {
                foreground: "#c472fb",
              },
            },
            {
              scope: "entity.other.attribute-name",
              settings: {
                foreground: "#c472fb",
              },
            },
            {
              scope: [
                "entity.other.attribute-name.class.css",
                "entity.other.attribute-name.class.mixin.css",
                "entity.other.attribute-name.id.css",
                "entity.other.attribute-name.parent-selector.css",
                "entity.other.attribute-name.pseudo-class.css",
                "entity.other.attribute-name.pseudo-element.css",
                "source.css.less entity.other.attribute-name.id",
                "entity.other.attribute-name.scss",
              ],
              settings: {
                foreground: "#c472fb",
              },
            },
            {
              scope: "invalid",
              settings: {
                foreground: "#f75f8f",
              },
            },
            {
              scope: "markup.underline",
              settings: {
                fontStyle: "underline",
              },
            },
            {
              scope: "markup.bold",
              settings: {
                fontStyle: "bold",
                foreground: "#52a8ff",
              },
            },
            {
              scope: "markup.heading",
              settings: {
                fontStyle: "bold",
                foreground: "#52a8ff",
              },
            },
            {
              scope: "markup.italic",
              settings: {
                fontStyle: "italic",
              },
            },
            {
              scope: "markup.strikethrough",
              settings: {
                fontStyle: "strikethrough",
              },
            },
            {
              scope: "markup.inserted",
              settings: {
                foreground: "#62c073",
              },
            },
            {
              scope: "markup.deleted",
              settings: {
                foreground: "#f75f8f",
              },
            },
            {
              scope: "markup.changed",
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: "punctuation.definition.quote.begin.markdown",
              settings: {
                foreground: "#a1a1a1",
              },
            },
            {
              scope: "punctuation.definition.list.begin.markdown",
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: "markup.inline.raw",
              settings: {
                foreground: "#62c073",
              },
            },
            {
              scope: "punctuation.definition.tag",
              settings: {
                foreground: "#a1a1a1",
              },
            },
            {
              scope: ["meta.preprocessor", "entity.name.function.preprocessor"],
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: "meta.preprocessor.string",
              settings: {
                foreground: "#62c073",
              },
            },
            {
              scope: "meta.preprocessor.numeric",
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: "meta.structure.dictionary.key.python",
              settings: {
                foreground: "#c472fb",
              },
            },
            {
              scope: "meta.diff.header",
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: "storage",
              settings: {
                foreground: "#f75f8f",
              },
            },
            {
              scope: "storage.type",
              settings: {
                foreground: "#f75f8f",
              },
            },
            {
              scope: ["storage.modifier", "keyword.operator.noexcept"],
              settings: {
                foreground: "#f75f8f",
              },
            },
            {
              scope: ["string", "meta.embedded.assembly"],
              settings: {
                foreground: "#62c073",
              },
            },
            {
              scope: "string.tag",
              settings: {
                foreground: "#62c073",
              },
            },
            {
              scope: "string.value",
              settings: {
                foreground: "#62c073",
              },
            },
            {
              scope: "string.regexp",
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: [
                "punctuation.definition.template-expression.begin",
                "punctuation.definition.template-expression.end",
                "punctuation.section.embedded",
              ],
              settings: {
                foreground: "#ededed",
              },
            },
            {
              scope: ["meta.template.expression"],
              settings: {
                foreground: "#ededed",
              },
            },
            {
              scope: [
                "support.type.vendored.property-name",
                "support.type.property-name",
                "variable.css",
                "variable.scss",
                "variable.other.less",
                "source.coffee.embedded",
              ],
              settings: {
                foreground: "#c472fb",
              },
            },
            {
              scope: "keyword",
              settings: {
                foreground: "#f75f8f",
              },
            },
            {
              scope: "keyword.control",
              settings: {
                foreground: "#f75f8f",
              },
            },
            {
              scope: "keyword.operator",
              settings: {
                foreground: "#f75f8f",
              },
            },
            {
              scope: [
                "keyword.operator.new",
                "keyword.operator.expression",
                "keyword.operator.cast",
                "keyword.operator.sizeof",
                "keyword.operator.alignof",
                "keyword.operator.typeid",
                "keyword.operator.alignas",
                "keyword.operator.instanceof",
                "keyword.operator.logical.python",
                "keyword.operator.wordlike",
              ],
              settings: {
                foreground: "#f75f8f",
              },
            },
            {
              scope: "keyword.other.unit",
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: [
                "punctuation.section.embedded.begin.php",
                "punctuation.section.embedded.end.php",
              ],
              settings: {
                foreground: "#f75f8f",
              },
            },
            {
              scope: "support.function.git-rebase",
              settings: {
                foreground: "#c472fb",
              },
            },
            {
              scope: "constant.sha.git-rebase",
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: [
                "storage.modifier.import.java",
                "variable.language.wildcard.java",
                "storage.modifier.package.java",
              ],
              settings: {
                foreground: "#ededed",
              },
            },
            {
              scope: "variable.language",
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: [
                "entity.name.function",
                "support.function",
                "support.constant.handlebars",
                "source.powershell variable.other.member",
                "entity.name.operator.custom-literal",
              ],
              settings: {
                foreground: "#c472fb",
              },
            },
            {
              scope: [
                "support.class",
                "support.type",
                "entity.name.type",
                "entity.name.namespace",
                "entity.other.attribute",
                "entity.name.scope-resolution",
                "entity.name.class",
                "storage.type.numeric.go",
                "storage.type.byte.go",
                "storage.type.boolean.go",
                "storage.type.string.go",
                "storage.type.uintptr.go",
                "storage.type.error.go",
                "storage.type.rune.go",
                "storage.type.cs",
                "storage.type.generic.cs",
                "storage.type.modifier.cs",
                "storage.type.variable.cs",
                "storage.type.annotation.java",
                "storage.type.generic.java",
                "storage.type.java",
                "storage.type.object.array.java",
                "storage.type.primitive.array.java",
                "storage.type.primitive.java",
                "storage.type.token.java",
                "storage.type.groovy",
                "storage.type.annotation.groovy",
                "storage.type.parameters.groovy",
                "storage.type.generic.groovy",
                "storage.type.object.array.groovy",
                "storage.type.primitive.array.groovy",
                "storage.type.primitive.groovy",
              ],
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: [
                "meta.type.cast.expr",
                "meta.type.new.expr",
                "support.constant.math",
                "support.constant.dom",
                "support.constant.json",
                "entity.other.inherited-class",
              ],
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: [
                "keyword.control",
                "source.cpp keyword.operator.new",
                "keyword.operator.delete",
                "keyword.other.using",
                "keyword.other.directive.using",
                "keyword.other.operator",
                "entity.name.operator",
              ],
              settings: {
                foreground: "#f75f8f",
              },
            },
            {
              scope: [
                "variable",
                "meta.definition.variable.name",
                "support.variable",
                "entity.name.variable",
                "constant.other.placeholder",
              ],
              settings: {
                foreground: "#ededed",
              },
            },
            {
              scope: ["variable.other.constant", "variable.other.enummember"],
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: ["meta.object-literal.key"],
              settings: {
                foreground: "#c472fb",
              },
            },
            {
              scope: [
                "support.constant.property-value",
                "support.constant.font-name",
                "support.constant.media-type",
                "support.constant.media",
                "constant.other.color.rgb-value",
                "constant.other.rgb-value",
                "support.constant.color",
              ],
              settings: {
                foreground: "#62c073",
              },
            },
            {
              scope: [
                "punctuation.definition.group.regexp",
                "punctuation.definition.group.assertion.regexp",
                "punctuation.definition.character-class.regexp",
                "punctuation.character.set.begin.regexp",
                "punctuation.character.set.end.regexp",
                "keyword.operator.negation.regexp",
                "support.other.parenthesis.regexp",
              ],
              settings: {
                foreground: "#62c073",
              },
            },
            {
              scope: [
                "constant.character.character-class.regexp",
                "constant.other.character-class.set.regexp",
                "constant.other.character-class.regexp",
                "constant.character.set.regexp",
              ],
              settings: {
                foreground: "#f75f8f",
              },
            },
            {
              scope: [
                "keyword.operator.or.regexp",
                "keyword.control.anchor.regexp",
              ],
              settings: {
                foreground: "#c472fb",
              },
            },
            {
              scope: "keyword.operator.quantifier.regexp",
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: ["constant.character", "constant.other.option"],
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: "constant.character.escape",
              settings: {
                foreground: "#52a8ff",
              },
            },
            {
              scope: "entity.name.label",
              settings: {
                foreground: "#ededed",
              },
            },
          ],
          type: "dark",
        },
      },
    },
  },
});
