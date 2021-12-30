export interface User {
    id           : number
    name        :string ,
    position     :string ,
    department   :string ,
    street       :string ,
    streetNumber :number  ,
    zipCode      :string ,
    city         :string ,
    phone        :string ,
    mobilePhone  :string ,
    fax          :string ,
    email        :string ,
    branchId     :number  ,
    login       :string ,
    status       :string ,
}


export interface Branch{
    id:      number,
    name:    string,
    address: string,
    status:  string,
}


