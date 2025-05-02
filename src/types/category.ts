export interface ICategorys {
  createdAt: string;
  createdBy: string;
  description: string;
  icon: string;
  isActive: boolean;
  name: string;
  parent: string | null;
  slug: string;
  updatedAt: string;
  _id: string;
  children:ICategorys[]
}
