# ✅ GenericApp - Setup Checklist

## Before Running the App

### Required Setup (All Complete ✅)
- [x] Node.js >= 20.19.4 installed (v22.23.1)
- [x] npm >= 10 installed (10.9.8)
- [x] Xcode >= 26 installed (26.2)
- [x] CocoaPods >= 1.15 installed (1.16.2)
- [x] Watchman installed (2024.12.02.00)
- [x] Dependencies installed (`bun install` completed)
- [x] Project scaffolded
- [x] Configuration completed
- [x] Code structure created
- [x] Verification passed

### Optional Setup (Do Before First Run)
- [ ] Create `.env` file from `.env.example`
- [ ] Edit `.env` with your values

## To Run the App

### Option 1: Web (Recommended First - Instant)
```bash
cd /Users/abhishek/Documents/Pers/Projs\ perso/reactnative/genericApp
bun run web
```
- [ ] Run command above
- [ ] Check browser opens
- [ ] Verify app loads

### Option 2: iOS (15-25 min first time)
```bash
cd /Users/abhishek/Documents/Pers/Projs\ perso/reactnative/genericApp
bun run ios
```
- [ ] Ensure ~20 GB disk space free
- [ ] Run command above
- [ ] Wait for build to complete
- [ ] Verify simulator opens
- [ ] Verify app loads

### Option 3: Android
```bash
cd /Users/abhishek/Documents/Pers/Projs\ perso/reactnative/genericApp
bun run android
```
- [ ] Start Android emulator first
- [ ] Run command above
- [ ] Verify app loads

## Development Checklist

### Daily Development
- [ ] `npm start` - Start Metro bundler
- [ ] Make code changes
- [ ] Hot reload works automatically
- [ ] Run `bun run lint` before commits
- [ ] Run `bun run typecheck` before commits

### Adding Native Packages
- [ ] Use `bunx expo install <package>`
- [ ] Update `app.config.ts` if needed
- [ ] Run `bunx expo prebuild --clean`
- [ ] Rebuild with `bun run ios` or `bun run android`

### Code Quality
- [ ] Run `bun run validate` (lint + typecheck)
- [ ] Run `bun run format` to format code
- [ ] Fix any ESLint errors
- [ ] Fix any TypeScript errors

## Troubleshooting Checklist

### If Build Fails
- [ ] Check disk space: `df -h ~`
- [ ] Clean derived data: `rm -rf ~/Library/Developer/Xcode/DerivedData/*`
- [ ] Clean native folders: `rm -rf ios android`
- [ ] Reinstall: `rm -rf node_modules && bun install`
- [ ] Try again: `bun run ios`

### If Verification Fails
- [ ] Run `bun run doctor`
- [ ] Fix reported issues
- [ ] Run `bun run typecheck`
- [ ] Run `bun run lint`
- [ ] Run `bun run format`

## Documentation Reference

| Document | Purpose |
|----------|---------|
| QUICKSTART.md | Quick commands to get started |
| README.md | Project overview |
| SETUP_COMPLETE.md | Comprehensive setup report |
| SETUP_SUMMARY.md | Full summary |
| TASK_LIST.md | Detailed task breakdown |

## Quick Commands

```bash
# Development
npm start              # Metro bundler
bun run ios           # iOS simulator
bun run web           # Web browser
bun run android       # Android emulator

# Quality
bun run lint          # ESLint
bun run typecheck     # TypeScript
bun run format        # Prettier
bun run validate      # Lint + typecheck

# Utils
bun run doctor        # Health check
bun run prebuild      # Regenerate native
```

## Ready to Go! ✅

All setup tasks are complete. Just run your chosen platform and start coding!
