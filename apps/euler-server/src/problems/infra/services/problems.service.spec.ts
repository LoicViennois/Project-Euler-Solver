import { ProblemsService } from './problems.service';

describe('ProblemsService', () => {
  const problemsService = new ProblemsService();

  describe('when getting problems', () => {
    it('should return a list of problems', () => {
      expect(problemsService.getProblems()).toEqual([
        { id: 1, name: 'euler001', status: 0 },
        { id: 2, name: 'euler002', status: 0 },
        { id: 3, name: 'euler003', status: 0 },
        { id: 4, name: 'euler004', status: 0 },
        { id: 5, name: 'euler005', status: 0 },
        { id: 6, name: 'euler006', status: 0 },
        { id: 7, name: 'euler007', status: 0 },
        { id: 8, name: 'euler008', status: 0 },
        { id: 9, name: 'euler009', status: 0 },
        { id: 10, name: 'euler010', status: 0 },
        { id: 11, name: 'euler011', status: 0 },
        { id: 12, name: 'euler012', status: 0 },
        { id: 13, name: 'euler013', status: 0 },
        { id: 14, name: 'euler014', status: 0 },
        { id: 15, name: 'euler015', status: 0 },
        { id: 16, name: 'euler016', status: 0 },
        { id: 17, name: 'euler017', status: 0 },
        { id: 18, name: 'euler018', status: 0 },
        { id: 19, name: 'euler019', status: 0 },
        { id: 20, name: 'euler020', status: 0 },
        { id: 21, name: 'euler021', status: 0 },
        { id: 22, name: 'euler022', status: 0 },
        { id: 23, name: 'euler023', status: 0 },
        { id: 24, name: 'euler024', status: 0 },
        { id: 25, name: 'euler025', status: 0 },
        { id: 26, name: 'euler026', status: 0 },
        { id: 27, name: 'euler027', status: 0 },
        { id: 28, name: 'euler028', status: 0 },
        { id: 29, name: 'euler029', status: 0 },
        { id: 30, name: 'euler030', status: 0 },
        { id: 31, name: 'euler031', status: 0 },
        { id: 32, name: 'euler032', status: 0 },
        { id: 33, name: 'euler033', status: 0 },
        { id: 34, name: 'euler034', status: 0 },
        { id: 35, name: 'euler035', status: 0 },
        { id: 36, name: 'euler036', status: 0 },
        { id: 37, name: 'euler037', status: 0 },
        { id: 38, name: 'euler038', status: 0 },
        { id: 39, name: 'euler039', status: 0 },
        { id: 40, name: 'euler040', status: 0 },
        { id: 41, name: 'euler041', status: 0 },
        { id: 42, name: 'euler042', status: 0 },
        { id: 43, name: 'euler043', status: 0 },
        { id: 44, name: 'euler044', status: 0 },
        { id: 45, name: 'euler045', status: 0 },
        { id: 46, name: 'euler046', status: 0 },
        { id: 47, name: 'euler047', status: 0 },
        { id: 48, name: 'euler048', status: 0 },
        { id: 49, name: 'euler049', status: 0 },
        { id: 50, name: 'euler050', status: 0 },
        { id: 51, name: 'euler051', status: 0 },
        { id: 52, name: 'euler052', status: 0 },
        { id: 53, name: 'euler053', status: 0 },
        { id: 54, name: 'euler054', status: 0 },
        { id: 55, name: 'euler055', status: 0 },
        { id: 56, name: 'euler056', status: 0 },
        { id: 57, name: 'euler057', status: 0 },
        { id: 58, name: 'euler058', status: 0 },
        { id: 59, name: 'euler059', status: 0 },
        { id: 60, name: 'euler060', status: 0 },
        { id: 61, name: 'euler061', status: 0 },
        { id: 62, name: 'euler062', status: 0 },
        { id: 63, name: 'euler063', status: 0 },
        { id: 64, name: 'euler064', status: 0 },
        { id: 65, name: 'euler065', status: 0 },
        { id: 66, name: 'euler066', status: 0 },
        { id: 67, name: 'euler067', status: 0 },
        { id: 68, name: null, status: 1 },
        { id: 69, name: null, status: 1 },
        { id: 70, name: null, status: 1 },
        { id: 71, name: null, status: 1 },
        { id: 72, name: null, status: 1 },
        { id: 73, name: null, status: 1 },
        { id: 74, name: null, status: 1 },
        { id: 75, name: null, status: 1 },
        { id: 76, name: null, status: 1 },
        { id: 77, name: null, status: 1 },
        { id: 78, name: null, status: 1 },
        { id: 79, name: null, status: 1 },
        { id: 80, name: null, status: 1 },
      ]);
    });
  });
});
