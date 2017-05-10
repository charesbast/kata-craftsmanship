const {answerQuestion, extractOperands} = require("./questionService");
const {expect} = require("chai");

describe("Question Service", () => {
  describe("extractOperands", () => {
    const question = "c4679060: which of the following numbers is both a square and a cube: 227, 15625, 117649, 981";

    it("Should extract operands", () => {
      expect(extractOperands(question)).to.deep.equal([227,15625, 117649, 981]);
    });
  });

  describe("When asked an addition", () => {
    const question = "what is 16 plus 4";

    it("Should return the result of the addition", () => {
      expect(answerQuestion(question)).to.equal(20);
    });
  });

  describe("When asked an substraction", () => {
    const question = "what is 16 minus 4";

    it("Should return the result of the addition", () => {
      expect(answerQuestion(question)).to.equal(12);
    });
  });

  describe("When asked an divided", () => {
    const question = "what is 6 divided by 2";

    it("Should return the result of the divided", () => {
      expect(answerQuestion(question)).to.equal(3);
    });
  });

  describe("When asked a multiplication", () => {
    const question = "d97e2cf0: what is 5 multiplied by 12";

    it("Should return the result of the multiplication", () => {
      expect(answerQuestion(question)).to.equal(60);
    });
  });

  describe("When asked a power operation", () => {
    const question = "d97e2cf0: what is 3 power by 2";

    it("Should return the result of the power", () => {
      expect(answerQuestion(question)).to.equal(9);
    });
  });

  describe("When asked about the largest number", () => {
    const question = "Which of the following numbers is the largest: 462, 295, 77, 40";

    it("Should return the greater number", () => {
      expect(answerQuestion(question)).to.equal(462);
    });
  });

  describe("When asked if a number is a cube or a square", () => {
    const question = "c4679060: which of the following numbers is both a square and a cube: 227, 15625, 117649, 981";

    it("Should return the correct number", () => {
      expect(answerQuestion(question)).to.deep.equal('15625, 117649');
    });
  });

  describe("When asked fibonacci number", () => {
    const question = "44276160: what is the 15th number in the Fibonacci sequence";

    it("Should return the correct number", () => {
      expect(answerQuestion(question)).to.deep.equal(610);
    });
  });
});