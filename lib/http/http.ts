const ContentTypes = {
  JSON: 'application/json',
  JSON_WITH_CHARSET: 'application/json; charset=utf-8',
  MULTIPART_FORM_DATA: 'multipart/form-data'
};

const Headers = {
  ACCEPT: 'accept',
  CONTENT_TYPE: 'content-type',
  CONTENT_LENGTH: 'content-length',
  AUTHORIZATION: 'authorization'
};

const Http =  {
  Method: {
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    GET: 'GET'
  },

  StatusCode: {
    MOVED_PERMANENTLY: 301,
    MOVED_TEMPORARILY: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    TEMPORARY_REDIRECT: 307
  },

  isRedirect(statusCode: number): boolean {
    return [
      Http.StatusCode.MOVED_PERMANENTLY,
      Http.StatusCode.MOVED_TEMPORARILY,
      Http.StatusCode.SEE_OTHER,
      Http.StatusCode.NOT_MODIFIED
    ].indexOf(statusCode) > -1;
  },

  needsContentLengthHeader(requestMethod: string): boolean {
    return [
      Http.Method.POST,
      Http.Method.PUT,
      Http.Method.DELETE
    ].indexOf(requestMethod) > -1;
  },

  Headers: Headers,
  ContentTypes: ContentTypes
};

export = Http;
