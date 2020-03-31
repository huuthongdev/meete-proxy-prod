export enum PermissionItem {
    // User
    VIEW_STAFF = 'VIEW_STAFF',
    WRITE_STAFF = 'WRITE_STAFF',
    CHANGE_PASSWORD_STAFF = 'CHANGE_PASSWORD_STAFF',
    CHANGE_ACTIVE_STAFF = 'CHANGE_ACTIVE_STAFF',
    // Role
    VIEW_ROLE = 'VIEW_ROLE',
    WRITE_ROLE = 'WRITE_ROLE',
}

export const Permissions: PermissionItem[] = [
    PermissionItem.VIEW_STAFF,
    PermissionItem.WRITE_STAFF,
    PermissionItem.CHANGE_PASSWORD_STAFF,
    PermissionItem.CHANGE_ACTIVE_STAFF,

    PermissionItem.VIEW_ROLE,
    PermissionItem.WRITE_ROLE,
]