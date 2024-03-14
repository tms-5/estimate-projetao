export type SearchActivityType = {
  id?: number;
  title?: string;
  description?: string;
  area?: string;
  tech?: string;
  lib?: string;
  seniorLevel?: string;
};

export type ProjectType = {
  name?: string,
  description?: string,
  date_start?: string,
  date_predicted_conclusion?: string,
  date_conclusion?: string,
  developers_quantity?: 0,
  develop_hours?: 0,
  stack?: string,
  xp_level?: string,
  company_id?: 0,
  company_field?: string
};
