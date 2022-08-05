# Accordion

Elastik Accordions display a list of high-level options that can expand/collapse to reveal more information.

## Automatic Imports Support from Nuxt

Elastik Nuxt provides 3 Accordion related components:

- `ElastikAccordion`: The wrapper that clones its children to forward its props to the `ElastikAccordionItem`.
- `ElastikAccordionItem`: A single accordion item.
- `ElastikAccordionIcon`: A chevron-down icon that rotates based on the expanded/collapsed state

## Usage

By default, only one accordion item may be expanded. It can only be collapsed again by expanding another accordion item.

```vue
    <ElastikAccordion>
      <ElastikAccordionItem>
        // This slot will handle the title/header of the accordion and is the part you click on
        <template slot="accordion-trigger">
            <h3>Accordion Item 1</h3>
        </template>
        // This slot will handle all the content that is passed to the accordion
        <template slot="accordion-content">
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </span>
        </template>
      </ElastikAccordionItem>

      <ElastikAccordionItem>
        // This slot will handle the title/header of the accordion and is the part you click on
        <template slot="accordion-trigger">
            <h3>Accordion Item 2</h3>
        </template>
        // This slot will handle all the content that is passed to the accordion
        <template slot="accordion-content">
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </span>
        </template>
      </ElastikAccordionItem>

      <ElastikAccordionItem>
        // This slot will handle the title/header of the accordion and is the part you click on
        <template slot="accordion-trigger">
            <h3>Accordion Item 3</h3>
        </template>
        // This slot will handle all the content that is passed to the accordion
        <template slot="accordion-content">
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </span>
        </template>
      </ElastikAccordionItem>

    </ElastikAccordion>
```

# Props

## `ElastikAccordion`

### Props

| Name          | Type                          | Default | Description                                                    |
| ------------- | ----------------------------- | ------- | -------------------------------------------------------------- |
| index         | `Number`                      | 0       | The index(es) of the expanded accordion item                   |

<!-- ### Events

| Name   | Payload type | Default           | Description |
| ------ | ------------ | ----------------- | ----------- |
| change | `Number`     | `Array of Number` |             | Event emitted when the accordion items are expanded. | -->

### Slots

| Name    | Description                           |
| ------- | ------------------------------------- |
| default | Slot for `ElastikAccordionItem` components |

## `ElastikAccordionItem`

### Props

| Name          | Type      | Default | Description                                              |
| ------------- | --------- | ------- | -------------------------------------------------------- |
| bg            | `string`  |         | Add background color to entire accordion item.           |
| classes       | `string`  |         | Css Styles for styling the item.                         |
| spacing       | `string`  | xs      | Set the Trigger and the content spacing (xs,sm,md,lg,xl) |
| headerBg      | `string`  |         | Add background color to accordion trigger                |
| headerHoverBg | `string`  |         | Add hover background color to accordion trigger          |

<!-- ### Events

| Name   | Payload type | Default           | Description |
| ------ | ------------ | ----------------- | ----------- |
| change | `Number`     | `Array of Number` |             | Event emitted when the `ElastikAccordionItem` expands or collapses. | -->

### Scoped Slots

| Name       | Type     | Slot              | Default | Description |
| ---------- | -------- | ----------------- | ------- | ----------- |
| isExpanded | `Number` | `Array of Number` | default |             | Exposes the expanded state of the `ElastikAccordionItem` |
| isDisabled | `Number` | `Array of Number` | default |             | Exposes the disabled state of the `ElastikAccordionItem` |