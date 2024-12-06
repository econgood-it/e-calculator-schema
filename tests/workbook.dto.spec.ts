import { WorkbookResponseBodySchema } from '../src/workbook.dto';
import { BalanceSheetType, BalanceSheetVersion } from '../src/shared.schemas';

describe('Workbook DTO', () => {
  it('should be created from json', () => {
    const workbook = {
      version: BalanceSheetVersion.v5_0_9,
      type: BalanceSheetType.Full,
      groups: [
        { shortName: 'A', name: 'A name' },
        { shortName: 'B', name: 'B name' },
      ],
      evaluationLevels: [
        {
          level: 0,
          name: 'Vorbildlich',
          pointsFrom: 7,
          pointsTo: 10,
        },
        {
          level: 1,
          name: 'Erfahren',
          pointsFrom: 4,
          pointsTo: 6,
        },
      ],
    };
    expect(WorkbookResponseBodySchema.parse(workbook)).toMatchObject(workbook);
  });
});
