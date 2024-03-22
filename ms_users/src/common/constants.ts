export enum RabbitMQ {
  USER_QUEUE = 'user',
  EMAIL_QUEUE = 'email',
}

export enum UserMessages {
  CREATE = 'CREATE_USER',
  UPDATE = 'UPDATE_USER',
  DELETE = 'DELETE_USER',
  FIND_ALL = 'FIND_USERS',
  FIND_ONE = 'FIND_USER',
  VALID = 'VALID_USER',
}

export enum EmailMessages {
  SEND_EMAIL = 'SEND_EMAIL',
}
