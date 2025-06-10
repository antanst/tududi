import { Area } from "./Area";
import { Tag } from "./Tag";
import { PriorityType, Task } from "./Task";

export interface Project {
  id?: number;
  name: string;
  description?: string;
  active: boolean;   
  pin_to_sidebar?: boolean; 
  area?: Area;
  area_id?: number | null;   
  tags?: Tag[];  
  priority?: PriorityType;
  tasks?: Task[];
  due_date_at?: string;
}