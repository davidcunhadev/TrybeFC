export type ServiceMessage = { message: string };

type ServiceResponseErrorType = 'BAD_REQUEST' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'CONFLICT';
type ServiceResponseSuccessType = 'SUCCESSFUL' | 'CREATED';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceMessage
};

export type ServiceResponseSuccess<T> = {
  status: ServiceResponseSuccessType,
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
