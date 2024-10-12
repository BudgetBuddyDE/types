/**
 * Enum representing HTTP status codes.
 *
 * @enum {number}
 * @readonly
 * @property {number} OK - 200: The request has succeeded.
 * @property {number} CREATED - 201: The request has been fulfilled and has resulted in one or more new resources being created.
 * @property {number} ACCEPTED - 202: The request has been accepted for processing, but the processing has not been completed.
 * @property {number} NO_CONTENT - 204: The server has successfully fulfilled the request and there is no additional content to send.
 * @property {number} PARTIAL_CONTENT - 206: The server is delivering only part of the resource due to a range header sent by the client.
 * @property {number} MULTIPLE_CHOICES - 300: The request has more than one possible response.
 * @property {number} MOVED_PERMANENTLY - 301: The URL of the requested resource has been changed permanently.
 * @property {number} FOUND - 302: The requested resource resides temporarily under a different URL.
 * @property {number} BAD_REQUEST - 400: The server could not understand the request due to invalid syntax.
 * @property {number} UNAUTHORIZED - 401: The client must authenticate itself to get the requested response.
 * @property {number} PAYMENT_REQUIRED - 402: Reserved for future use.
 * @property {number} FORBIDDEN - 403: The client does not have access rights to the content.
 * @property {number} NOT_FOUND - 404: The server can not find the requested resource.
 * @property {number} METHOD_NOT_ALLOWED - 405: The request method is known by the server but is not supported by the target resource.
 * @property {number} REQUEST_TIMEOUT - 408: The server would like to shut down this unused connection.
 * @property {number} CONFLICT - 409: The request could not be completed due to a conflict with the current state of the target resource.
 * @property {number} GONE - 410: The requested resource is no longer available and will not be available again.
 * @property {number} UNPROCESSABLE_ENTITY - 422: The server understands the content type of the request entity, but was unable to process the contained instructions.
 * @property {number} TOO_MANY_REQUESTS - 429: The user has sent too many requests in a given amount of time.
 * @property {number} INTERNAL_SERVER_ERROR - 500: The server has encountered a situation it doesn't know how to handle.
 * @property {number} NOT_IMPLEMENTED - 501: The request method is not supported by the server and cannot be handled.
 * @property {number} BAD_GATEWAY - 502: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
 * @property {number} SERVICE_UNAVAILABLE - 503: The server is not ready to handle the request.
 * @property {number} GATEWAY_TIMEOUT - 504: The server is acting as a gateway and cannot get a response in time.
 */
export enum HTTPStatusCode {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  PARTIAL_CONTENT = 206,
  MULTIPLE_CHOICES = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  UNPROCESSABLE_ENTITY = 422,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}
