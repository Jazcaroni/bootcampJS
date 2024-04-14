import { vi } from "vitest";
import { AccountVm } from "../account.vm";
import * as accountFieldValidation from "./account-field.validations";
import { validateForm } from "./account-form.validation";

describe("account-form.validations spec", () => {
  describe("validateForm", () => {
    it("Should return true when all field are correct", () => {
      //Arrange
      const account: AccountVm = {
        type: "1",
        name: "Ahorro casa",
      };
      vi.spyOn(
        accountFieldValidation,
        "validateAccountTypeField"
      ).mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(
        accountFieldValidation,
        "validateAccountNameField"
      ).mockReturnValue({
        succeeded: true,
      });
      // Act
      const result = validateForm(account);

      //Assert
      expect(result.succeeded).toBeTruthy();
    });
    it("Should return false when all field are INcorrect", () => {
      //Arrange
      const account: AccountVm = {
        type: "",
        name: "",
      };
      vi.spyOn(
        accountFieldValidation,
        "validateAccountTypeField"
      ).mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(
        accountFieldValidation,
        "validateAccountNameField"
      ).mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });
      // Act
      const result = validateForm(account);

      //Assert
      expect(result.succeeded).toBeFalsy();
    });
  });
});
