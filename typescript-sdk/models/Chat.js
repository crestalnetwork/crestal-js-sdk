/* tslint:disable */
/* eslint-disable */
/**
 * Crestal dashboard API - /crestal - OpenAPI 3.0
 * This is a crestal-dashboard-backend server.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the Chat interface.
 */
export function instanceOfChat(value) {
    return true;
}
export function ChatFromJSON(json) {
    return ChatFromJSONTyped(json, false);
}
export function ChatFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'projectId': json['project_id'] == null ? undefined : json['project_id'],
        'message': json['message'] == null ? undefined : json['message'],
        'status': json['status'] == null ? undefined : json['status'],
        'targetPerformance': json['target_performance'] == null ? undefined : json['target_performance'],
        'sender': json['sender'] == null ? undefined : json['sender'],
        'createdAt': json['created_at'] == null ? undefined : json['created_at'],
    };
}
export function ChatToJSON(json) {
    return ChatToJSONTyped(json, false);
}
export function ChatToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'project_id': value['projectId'],
        'message': value['message'],
        'status': value['status'],
        'target_performance': value['targetPerformance'],
        'sender': value['sender'],
        'created_at': value['createdAt'],
    };
}
