export enum RabbitMQ {
  USER_QUEUE = 'user',
  POST_QUEUE = 'post',
}

export enum UserMessages {
  CREATE = 'CREATE_USER',
  UPDATE = 'UPDATE_USER',
  DELETE = 'DELETE_USER',
  FIND_ALL = 'FIND_USERS',
  FIND_ONE = 'FIND_USER',
  VALID = 'VALID_USER',
}

export enum PostMessages {
  CREATE = 'CREATE_POST',
  UPDATE = 'UPDATE_POST',
  DELETE = 'DELETE_POST',
  FIND_ALL = 'FIND_POSTS',
  FIND_ONE = 'FIND_POST',
  VALID = 'VALID_POST',
}
