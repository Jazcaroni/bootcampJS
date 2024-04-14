import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceededResult,
  isStringValueInformed,
} from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";

export const validateAccountTypeField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};

export const validateAccountNameField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};
