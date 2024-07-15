200 : The request succeeded. The result meaning of "success" depends on the HTTP method:

1. Get
2. Put
3. Post
4. Patch
5. Delete

201:  (Created)  The request succeeded, and a new resource was created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.

202: (Accepted) The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request.

203: (Non Authoritative Information) This is mostly used for mirrors or backups of another resource. Except for that specific case, the `200 OK` response is preferred to this status.

204: (No Content) The HTTP **`204 No Content`** success status response code indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page.This might be used, for example, when implementing "save and continue editing" functionality for a wiki site. For Put Case.

205: (Reset Content) The HTTP **`205 Reset Content**` response status tells the client to reset the document view, so for example to clear the content of a form, reset a canvas state, or to refresh the UI.

206 (Partial Range) The HTTP **`206 Partial Content`** success status response code indicates that the request has succeeded and the body contains the requested ranges of data, as described in the [`Range`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) header of the request.

207 (MultiStatus) The HTTP **`207 Multi-Status`** response code indicates that there might be a mixture of responses.

208 (Already Reported) The HTTP **`208 Already Reported`** response code is used in a [`207`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207) (`207 Multi-Status`) response to save space and avoid conflicts. If the same resource is requested several times (for example as part of a collection), with different paths, only the first one is reported with [`200`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200). Responses for all other bindings will report with this `208` status code, so no conflicts are created and the response stays shorter.

400: (Bad Request) The HyperText Transfer Protocol (HTTP) **`400 Bad Request`** response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error.

401: (Unauthorized) **`401 Unauthorized`** response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.

403: (forbidden) The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.

404: (Not Found) The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist.

405: (Method Not Allowed) **`405 Method Not Allowed`** response status code indicates that the server knows the request method, but the target resource doesn't support this method.

406: (Not Acceptable) **`406 Not Acceptable`** client error response code indicates that the server cannot produce a response matching the list of acceptable values defined in the request's proactive [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) headers.

408: (Request Timeout) This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection.

409: (Conflict) Conflicts are most likely to occur in response to a [`PUT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) request. For example, you may get a 409 response when uploading a file that is older than the existing one on the server, resulting in a version control conflict.

415: (Unsupported Media Type) The HTTP **`415 Unsupported Media Type`** client error response code indicates that the server refuses to accept the request because the payload format is in an unsupported format.

417: (Expectation Failed) The HTTP **`417 Expectation Failed`** client error response code indicates that the expectation given in the request's [`Expect`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect) header could not be met.

500: (Internal Server Error) The HyperText Transfer Protocol (HTTP) **`500 Internal Server Error`** server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
