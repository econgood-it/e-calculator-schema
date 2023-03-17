# Version Comparator

With the version comparator you can compare [semver](https://semver.org/) valid version strings.
Additionally, the version comparator can compare version strings like 5.04, 5.06.

## Install
```bash
npm install @mr42/version-comparator
```

## Usage
### Compare
Compare two version strings
```typescript
import { compare } from '@mr42/version-comparator/dist/version.comparator';
// left < right
compare('4.04', '4.06') // -1
compare('4.4.1', '4.4.2') // -1
compare('4.04', '4.4.0') // -1, since left.length < right.length
// left > right
compare('4.06', '4.04') // 1
compare('4.4.2', '4.4.1') // 1
compare('4.4.0', '4.04') // 1, since left.length > right.length
// left == right
compare('4.06', '4.06') // 0
compare('4.4.1', '4.4.1') // 0
compare('4.04', '4.4') // 0
```
### Less than equal
Checks if version1 <= version2
```typescript
import { lte } from '@mr42/version-comparator/dist/version.comparator';
// check returns true
lte('4.04', '4.06') // true
lte('4.4.1', '4.4.2') // true
lte('4.04', '4.4.0') // true, since left.length < right.length
lte('4.06', '4.06') // true
lte('4.4.1', '4.4.1') // true
lte('4.04', '4.4') // true
// check returns false
lte('4.06', '4.04') // false
lte('4.4.2', '4.4.1') // false
lte('4.4.0', '4.04') // false, since left.length > right.length
```
### Greater than equal
Checks if version1 >= version2
```typescript
import { gte } from '@mr42/version-comparator/dist/version.comparator';
// check returns true
gte('4.06', '4.04') // true
gte('4.4.2', '4.4.1') // true
gte('4.4.0', '4.04') // true, since left.length > right.length
gte('4.06', '4.06') // true
gte('4.4.1', '4.4.1') // true
gte('4.04', '4.4') // true
// check returns false
gte('4.04', '4.06') // false
gte('4.4.1', '4.4.2') // false
gte('4.04', '4.4.0') // false, since left.length < right.length
```
### Equal
Checks if version1 == version2
```typescript
import { eq } from '@mr42/version-comparator/dist/version.comparator';
// check returns true
eq('4.06', '4.06') // true
eq('4.4.1', '4.4.1') // true
eq('4.04', '4.4') // true
// check returns false
eq('4.06', '4.04') // false
eq('4.4.2', '4.4.1') // false
eq('4.4.0', '4.04') // false, since left.length > right.length
eq('4.04', '4.06') // false
eq('4.4.1', '4.4.2') // false
eq('4.04', '4.4.0') // false, since left.length < right.length
```