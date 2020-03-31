import * as ObjectUtils from "./object.utils";

export class ServerError extends Error {
    status: number;
    errors: any;
    constructor(msg: string, status?: number, errors?: any) {
        super(msg);
        if (status) this.status = status;
        this.errors = errors || {};
    }
}

export function ThrowPayloadError(errors: any) {
    if (ObjectUtils.isHasValue(errors)) throw new ServerError(ErrorMessage.INVALID_PAYLOAD, 400, errors);
}

export const ErrorMessage = {
    PERMISSION_DENIED: 'PERMISSION_DENIED',
    ACCESS_DENIED: 'ACCESS_DENIED',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
    UNAUTHORZIED: 'UNAUTHORZIED',

    PASSWORD_INCORRECT: 'PASSWORD_INCORRECT',

    STAFF_NOT_EXIST: 'STAFF_NOT_EXIST',
    STAFF_IS_DISABLED: 'STAFF_IS_DISABLED',

    CANNOT_FIND_ROLE: 'CANNOT_FIND_ROLE',

    ROLE_WAS_EXISTED: 'ROLE_WAS_EXISTED',
    NAME_WAS_EXISTED: 'NAME_WAS_EXISTED',
    EMAIL_WAS_EXISTED: 'EMAIL_WAS_EXISTED',
    PHONE_NUMBER_WAS_EXISTED: 'PHONE_NUMBER_WAS_EXISTED',

    MUST_BE_NUMBER: 'MUST_BE_NUMBER',
    MUST_BE_STRING: 'MUST_BE_STRING',
    MUST_BE_OBJECT: 'MUST_BE_OBJECT',
    MUST_BE_ARRAY: 'MUST_BE_ARRAY',
    MUST_BE_PROVIDED: 'MUST_BE_PROVIDED',

    INVALID_PAYLOAD: 'INVALID_PAYLOAD',
    INVALID_ROUTE: 'INVALID_ROUTE',
    INVALID_EMAIL: 'INVALID_EMAIL',
    INVALID_PHONE_NUMBER: 'INVALID_PHONE_NUMBER',
    INVALID_PERMISSION: 'INVALID_PERMISSION',
}