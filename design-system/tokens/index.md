# Design Tokens

The foundational atomic CSS custom properties exported to Tailwind v4 and encapsulated in `/shared/constants/design/tokens.ts`.

## 1. Typography
- **Primary Font**: `Inter` (Falls back to device sans-serif: San Francisco, Segoe UI).
- **Scale**:
  - H1: 24–28px (`text-2xl`)
  - H2: 20–22px (`text-xl`)
  - H3: 16–18px (`text-lg`)
  - Body: 14px (`text-sm`) - Utilized universally internally for inputs and table rows.
- **Weights**: 400 (Regular) / 500 (Medium) / 600 (SemiBold). No black/heavy weights.

## 2. Semantic Color System
- **Background**: Soft `0 0% 100%` / dark `0 0% 5%`
- **Surface (Cards/Overlays)**: Matches background but utilizes 12px bounding radii and structural drop-shadowing.
- **Primary**: Sleek, tech-purple CTA highlight (`260 100% 60%`).
- **Success (Emerald)**: `142.1 76.2% 36.3%` - Used purely for strictly `Completed` Workflow logic.
- **Warning (Amber)**: `38 92% 50%` - Enforced blocking indicator for `Waiting on Dependencies`.

## 3. Spatial Configuration
- **Radius**: Universally `12px` (`0.75rem`) for standard cards and major modal surfaces. `8px` (`0.5rem`) for sub-components (Badges, small buttons).
- **Base Grid**: 8px
- **Layout Margins**: 16px / 24px
- **Section Breakers**: 32px+
