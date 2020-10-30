// NOTE: 幽霊型を作成(参考: https://zenn.dev/f_subal/articles/phantom_type_in_typescript)

type Branded<T, U extends string> = T & {[key in U]: never};

export default Branded;
