// ======================= Database =======================
import { Permissions, PermissionItem } from "./database/permissions";
// ======================= Utils =======================
import { ServerError, ThrowPayloadError, ErrorMessage } from "./utils/serverError.util";
import * as ObjectUtils from './utils/object.utils';
import * as DateUtils from './utils/dateTime.utils';
import * as StringUtils from './utils/string.utils';
// ======================= Types =======================
// import * as Types from './types';
// ======================= Configs =======================
import Configs from './configs';
// ======================= Services =======================
// import * as InternalMiddleware from "./services/_middlewares/internal.middleware";
// import * as StaffTokenServices from './services/internal/token/staffToken.service';
// import StaffLoginService from "./services/internal/staff/staffLogin.service";
// import CreateRoleService from "./services/internal/role/createRole.service";
// import CreateStaffService from "./services/internal/staff/createStaff.service";
// ======================= Routes, Middlewares =======================
import onError from "./middlewares/onError.middleware";
import app from "./app";

export {
    ErrorMessage,
    Configs,
    StringUtils,
    ThrowPayloadError,
    ObjectUtils,
    ServerError,
    DateUtils,
    onError,
    Permissions,
    PermissionItem,
    app,
}

