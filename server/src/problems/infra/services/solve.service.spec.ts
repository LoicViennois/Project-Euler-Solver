import { SolveService } from './solve.service';

describe('SolveService', () => {
  const solveService = new SolveService();

  describe('when solving a problem', () => {
    it('should return the problem solution', () => {
      const solution = solveService.solveProblem(1);
      expect(solution).toEqual({
        time: expect.any(String),
        value: 233168,
      });
    });
  });
});
