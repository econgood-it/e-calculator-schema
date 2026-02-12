# E-Calculator Schemas

This project contains the data transfer objects which are used by the [E-Calculator REST API](https://git.ecogood.org/services/balance-sheet-calculator)
and the [E-Calculator Frontend](https://git.ecogood.org/services/e-calculator-frontend).

## Install

```bash
yarn install e-calculator-schemas
```

## Usage

```typescript
import { RegionResponseBodySchema } from 'e-calculator-schemas/dist/region.dto';
const regionJson = {
  countryCode: 'DEU',
  countryName: 'Germany',
};
RegionResponseBodySchema.parse(regionJson);
```

