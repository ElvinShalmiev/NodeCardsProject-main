// to make the file a module and avoid the TypeScript error
export {}



export type Role = {
  name: string;
};
export type Car={
  vandor:string,
  model:string,
  color:string,
  image?:string
}

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}