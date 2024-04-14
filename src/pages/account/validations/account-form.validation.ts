import { FormValidationResult } from "@/common/validations/validation.model";
import { AccountError, AccountVm } from "../account.vm";
import {
  validateAccountNameField,
  validateAccountTypeField,
} from "./account-field.validations";

export const validateForm = (
  account: AccountVm
): FormValidationResult<AccountError> => {
  const fieldValidationResults = [
    validateAccountTypeField(account.type),
    validateAccountNameField(account.name),
  ];

  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      name: fieldValidationResults[1].errorMessage ?? "",
    },
  };
};
