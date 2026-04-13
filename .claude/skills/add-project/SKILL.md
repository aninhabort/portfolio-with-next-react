---
name: add-project
description: Skill to add a new project to the portfolio archive file in a structured and consistent way, following the existing interface and UI standards. Use when adding new projects to the portfolio archive.
---

# Add Project to Archive

## Purpose
Add a new project to the portfolio archive file (`src/content/projects/archive.ts`) in a structured, clean, and consistent way, following the existing `ProjectArchiveEntry` interface and keeping the UI consistency of the portfolio.

## Context
This portfolio is built with React / Next.js + TypeScript.  
The archive is rendered dynamically from the `PROJECT_ARCHIVE` array.

## Workflow

1. Ask the user for the project data:
   - title (string)
   - description (string)
   - tags (string[])
   - category (must match PROJECT_FILTERS)
   - designUrl (optional)
   - imageUrl (optional)
   - liveUrl (optional)
   - sourceUrl (optional)

2. Validate inputs:
   - Ensure required fields are provided (title, description, tags, category)
   - Ensure category exists in PROJECT_FILTERS
   - Prevent duplicate titles (case-insensitive)
   - Validate URLs (if provided)

3. Generate the object following this structure:

```ts
{
  title: "",
  description: "",
  tags: [],
  category: "",
  designUrl?: "",
  imageUrl?: "",
  liveUrl?: "",
  sourceUrl?: ""
}
```

4. Open file:
   `src/content/projects/archive.ts`

5. Insert the new project:

   * Add at the **top** of `PROJECT_ARCHIVE`
   * Keep formatting consistent
   * Maintain alphabetical order of keys

6. Return:

   * The inserted object
   * A preview of the updated array (first 2–3 items only)

---

## Rules

* NEVER break TypeScript types
* NEVER change existing projects
* ALWAYS keep formatting clean and consistent
* ALWAYS use double quotes
* ALWAYS keep trailing commas

---

## Edge Cases

* Missing required field → ask user to complete
* Invalid category → show valid PROJECT_FILTERS options
* Duplicate project → ask if user wants to update instead
* Missing image → allow empty string or omit field

---

## Output Format

1. ✅ Confirmation message
2. 📦 Generated object
3. 🧩 Updated snippet of PROJECT_ARCHIVE

---

## Example Command

Add project:

Title: Cooksy App
Description: Recipe mobile app with pantry and smart ingredient system
Tags: ["React Native", "Expo", "Firebase"]
Category: Mobile Apps
Image: /assets/cooksy.png
Live: [https://cooksy.app](https://cooksy.app)
Source: [https://github.com/user/cooksy](https://github.com/user/cooksy)

---

## Suggested Improvements (Optional)

* Add edit-project skill
* Add delete-project skill
* Auto-generate tags based on stack (React, Next, etc.)
* Auto-generate description from repo README

```

---

Se quiser, posso já criar também:
- `edit-project` (pra atualizar projetos)
- `add-featured-project` (pra homepage)
- ou até integrar com GitHub API pra puxar dados automático 👀
