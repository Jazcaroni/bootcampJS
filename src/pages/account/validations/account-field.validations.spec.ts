import { REQUIRED_FIELD_MESSAGE } from "@/common/validations/validation.const";
import {
  validateAccountNameField,
  validateAccountTypeField,
} from "./account-field.validations";

describe("account-field.validations spec", () => {
  describe("validateAccountNameField", () => {
    it("Should return false when the account is empty ", () => {
      //Arrange
      const value = "";

      //Act
      const result = validateAccountNameField(value);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("Should return true when the account is correct ", () => {
      //Arrange
      const value = "Ahorro casa";

      //Act
      const result = validateAccountNameField(value);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe("validateAccountTypeField", () => {
    it("Should return false when the account is empty ", () => {
      //Arrange
      const value = "";

      //Act
      const result = validateAccountTypeField(value);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("Should return true when the account is correct ", () => {
      //Arrange
      const value = "1";

      //Act
      const result = validateAccountTypeField(value);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});
