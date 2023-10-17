interface INotification {
  id: number;
  title: string;
  text: string;
  link: string;
  wasRead?: boolean;
  position?: number;
}

export { INotification };
