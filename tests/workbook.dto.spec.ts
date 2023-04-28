import { WorkbookResponseBodySchema } from '../src/workbook.dto';

describe('Workbook DTO', () => {
  it('should be created from json', () => {
    const sections = [
      { shortName: 'A1', title: 'A1 title' },
      { shortName: 'D1', title: 'D1 title' },
      { shortName: 'C2', title: 'C2 title' },
    ];
    const json = {
      sections,
    };
    expect(WorkbookResponseBodySchema.parse(json)).toMatchObject(json);
  });
});
