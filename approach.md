🔎 Overview

This project was built with React, TypeScript, TailwindCSS, and Storybook to create reusable, accessible, and theme-aware UI components. The main focus was on building two core components: InputField and DataTable, both showcased and tested inside Storybook.

1. Component-Driven Development

Followed a component-first methodology.

Broke requirements into isolated, reusable components.

Built each component independently inside Storybook before integrating.

2. Components Implemented
📝 InputField

Supports variants: outlined, filled, ghost.

Supports sizes: sm, md, lg.

States: default, disabled, error/invalid, with helperText and errorMessage.

Added accessibility attributes:

aria-invalid for errors.

aria-describedby for error text.

Styled using Tailwind with dark mode support.

📊 DataTable

Displays tabular data dynamically using columns + data.

Sorting by column with indicators (▲ / ▼).

Row selection (single & multiple) with onRowSelect callback.

Handles loading state (spinner).

Handles empty state (friendly message).

Generic type-safe props (DataTableProps<T> + Column<T>) for flexibility.

3. Storybook Integration

Added Storybook stories for both components.

Showcases all interactive states:

InputField: default, error, disabled, variants, helper text.

DataTable: default, sortable, row selection, loading, empty state.

Configured storybook-dark-mode addon for light/dark theme toggle.

Verified that Tailwind dark: utilities work correctly.

4. Styling with TailwindCSS

Utility-first classes for consistent UI.

Dark mode enabled (class) in tailwind.config.js.

Variant-specific border/background styles.

Responsive font sizes & spacing for input sizes.

5. TypeScript Usage

Defined strong types for props to ensure reusability and safety.

Used generics in DataTable to allow any type of row data.

Improved DX (developer experience) by leveraging autocomplete and type-checking.

6. Testing

Added Vitest + React Testing Library setup.

Tested InputField:

Label renders correctly.

onChange is triggered on typing.

Error message shows when invalid.

Ready for DataTable tests: sorting behavior, row selection, empty/loading states.

7. Documentation & Demo

Documented component props in stories.