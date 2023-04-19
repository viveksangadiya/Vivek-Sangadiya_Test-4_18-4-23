import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { ApiResponse, Config, InventoryBrand, InventoryCategory, InventoryPagination, InventoryProduct, InventoryTag, InventoryVendor } from 'app/modules/admin/apps/ecommerce/inventory/inventory.types';
import { Building, Campu } from '../building';

@Injectable({
    providedIn: 'root'
})
export class InventoryService
{
    // Private
    private _brands: BehaviorSubject<InventoryBrand[] | null> = new BehaviorSubject(null);
    private _categories: BehaviorSubject<InventoryCategory[] | null> = new BehaviorSubject(null);
    private _pagination: BehaviorSubject<InventoryPagination | null> = new BehaviorSubject(null);
    private _product: BehaviorSubject<InventoryProduct | null> = new BehaviorSubject(null);
    private _products: BehaviorSubject<InventoryProduct[] | null> = new BehaviorSubject(null);
    private _tags: BehaviorSubject<InventoryTag[] | null> = new BehaviorSubject(null);
    private _vendors: BehaviorSubject<InventoryVendor[] | null> = new BehaviorSubject(null);
    public _buildings:BehaviorSubject<Building<Config<Campu[]>> | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for brands
     */
    get brands$(): Observable<InventoryBrand[]>
    {
        return this._brands.asObservable();
    }

    /**
     * Getter for categories
     */
    get categories$(): Observable<InventoryCategory[]>
    {
        return this._categories.asObservable();
    }

    /**
     * Getter for pagination
     */
    get pagination$(): Observable<InventoryPagination>
    {
        return this._pagination.asObservable();
    }

    /**
     * Getter for product
     */
    get product$(): Observable<InventoryProduct>
    {
        return this._product.asObservable();
    }

    /**
     * Getter for products
     */
    get products$(): Observable<InventoryProduct[]>
    {
        return this._products.asObservable();        
    }

    /**
     * Getter for tags
     */
    get tags$(): Observable<InventoryTag[]>
    {
        return this._tags.asObservable();
    }

    /**
     * Getter for vendors
     */
    get vendors$(): Observable<InventoryVendor[]>
    {
        return this._vendors.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get brands   
     */
    getBrands(): Observable<InventoryBrand[]>
    {
        return this._httpClient.get<InventoryBrand[]>('api/apps/ecommerce/inventory/brands').pipe(
            tap((brands) => {
                this._brands.next(brands);
            })
        );
    }


    getAllBuildings():Observable<Building<Config<Campu[]>>>{
        return this._httpClient.get<Building<Config<Campu[]>>>("https://cmi-ofm.azurewebsites.net/api/EntityConfig/GetAllBuildings").pipe(
            map((res:any)=>{
                if(res.success){
                    this._buildings.next(res.configs)
                }
                return res;
            })
        )
     }

    createBuilding(building:Building<Config<Campu[]>>){
       const body=new HttpParams()
       .set('BuildingNo',building.configs.buildingNo)
       .set('BuildingName',building.configs.buildingName)
       .set('Description',building.configs.description)
       .set('Date_constructed',building.configs.date_constructed.toISOString())
       .set('Architect',building.configs.architect)
       .set('Contractor',building.configs.contractor)
       .set('Construction_Cost',building.configs.construction_Cost)
       .set('Renovation_History',building.configs.renovation_History)
       .set('Campus',building.configs.campus['campusId'])
       .set('Zone',building.zone)
       .set('wing',building.wingList)
       .set('IsActive',building.isActive)
       .set('BuildingImage',building.buildingImage)
       .set('NoOFFloors',building.noOFFloors)
       .set('Floors',building.floorList)

       return this._httpClient.post("https://cmi-ofm.azurewebsites.net/api/EntityConfig/AddBuildingConfig/",body)
    }

    AddConfigData(data: any) {
        const formObject = new FormData();

        for (let key in data) {
            formObject.append(key,`${(data as any)[key]}`);
        }
        formObject.append("IsActive","false")
        formObject.append("BuildingImage","")
        formObject.append("Floors","[]")
        formObject.append("EntityJson","[]")
        formObject.append("description","None")

        return this._httpClient.post(
            'https://cmi-ofm.azurewebsites.net/api/EntityConfig/AddBuildingConfig/',
            formObject
        );
    }

    getConfigDataById(id:string){
        const url = `https://cmi-ofm.azurewebsites.net/api/EntityConfig/GetBuildingID?BuildingID=${id}`

        return this._httpClient.get(url)
    }

    editConfigData(data:any,productId:string){
        const formObject = new FormData();

        formObject.append("UniqueId",productId)
        formObject.append("BuildingNo",data.buildingNo)
        formObject.append("BuildingName",data.buildingName)
        formObject.append("Description",data.description)
        formObject.append("Architect",data.architect)
        formObject.append("Contractor",data.contractor)
        formObject.append("Date_constructed",data.date_constructed)
        formObject.append("Construction_Cost",data.construction_Cost)
        formObject.append("Renovation_History",data.renovation_History)
        formObject.append("Campus",data.campus)
        formObject.append("Zone",data.zone)
        formObject.append("wing",data.wingList)
        formObject.append("NoOFFloors",'0')
        formObject.append("IsActive","false")
        formObject.append("BuildingImage","")
        formObject.append("Floors","[]")
        formObject.append("EntityJson","[]")

        const url =`https://cmi-ofm.azurewebsites.net/api/EntityConfig/EditBuildingConfig/`

        return this._httpClient.post(url,formObject)
    }

//     BuildingNo: 1
// BuildingName: SPM
// Description: 
// Date_constructed: 04/18/2023
// Architect: ss
// Contractor: Vivek
// Construction_Cost: 1111
// Renovation_History: 
// Campus: ada5412a-53c1-4234-8d52-7148c4309130
// Zone: 1cda3ce6-c055-49f8-8889-a7a06a07e18b
// wing: 3aab73da-d7d4-4113-ae26-0a156b18e4d5
// IsActive: false
// BuildingImage: 
// NoOFFloors: undefined
// Floors: 

    /**
     * Get categories
     */
    getCategories(): Observable<InventoryCategory[]>
    {
        return this._httpClient.get<InventoryCategory[]>('api/apps/ecommerce/inventory/categories').pipe(
            tap((categories) => {
                this._categories.next(categories);
            })
        );
    }

    /**
     * Get products
     *
     *
     * @param page
     * @param size
     * @param sort
     * @param order
     * @param search
     */
    getProducts(page: number = 0, size: number = 10, sort: string = 'name', order: 'asc' | 'desc' | '' = 'asc', search: string = ''):
        Observable<{ pagination: InventoryPagination; products: InventoryProduct[] }>
    {
        return this._httpClient.get<{ pagination: InventoryPagination; products: InventoryProduct[] }>('api/apps/ecommerce/inventory/products', {
            params: {
                page: '' + page,
                size: '' + size,
                sort,
                order,
                search
            }
        }).pipe(
            tap((response) => {
                this._pagination.next(response.pagination);
                this._products.next(response.products);
            })
        );
    }

    /**
     * Get product by id
     */
    getProductById(id: string): Observable<InventoryProduct>
    {
        return this._products.pipe(
            take(1),
            map((products) => {

                // Find the product
                const product = products.find(item => item.id === id) || null;

                // Update the product
                this._product.next(product);

                // Return the product
                return product;
            }),
            switchMap((product) => {

                if ( !product )
                {
                    return throwError('Could not found product with id of ' + id + '!');
                }

                return of(product);
            })
        );
    }

    /**
     * Create product
     */
    createProduct(): Observable<InventoryProduct>
    {
        return this.products$.pipe(
            take(1),
            switchMap(products => this._httpClient.post<InventoryProduct>('api/apps/ecommerce/inventory/product', {}).pipe(
                map((newProduct) => {
                    
                    // Update the products with the new product
                    this._products.next([newProduct, ...products]);
                    
                    // debugger;
                    // Return the new product
                    return newProduct;
                })
            ))
        );
    }

    /**
     * Update product
     *
     * @param id
     * @param product
     */
    updateProduct(id: string, product: InventoryProduct): Observable<InventoryProduct>
    {
        return this.products$.pipe(
            take(1),
            switchMap(products => this._httpClient.patch<InventoryProduct>('api/apps/ecommerce/inventory/product', {
                id,
                product
            }).pipe(
                map((updatedProduct) => {

                    // Find the index of the updated product
                    const index = products.findIndex(item => item.id === id);

                    // Update the product
                    products[index] = updatedProduct;

                    // Update the products
                    this._products.next(products);

                    // Return the updated product
                    return updatedProduct;
                }),
                switchMap(updatedProduct => this.product$.pipe(
                    take(1),
                    filter(item => item && item.id === id),
                    tap(() => {

                        // Update the product if it's selected
                        this._product.next(updatedProduct);

                        // Return the updated product
                        return updatedProduct;
                    })
                ))
            ))
        );
    }

    /**
     * Delete the product
     *
     * @param id
     */
    deleteProduct(id: string): Observable<boolean>
    {
        return this.products$.pipe(
            take(1),
            switchMap(products => this._httpClient.delete('api/apps/ecommerce/inventory/product', {params: {id}}).pipe(
                map((isDeleted: boolean) => {

                    // Find the index of the deleted product
                    const index = products.findIndex(item => item.id === id);

                    // Delete the product
                    products.splice(index, 1);

                    // Update the products
                    this._products.next(products);

                    // Return the deleted status
                    return isDeleted;
                })
            ))
        );
    }

    /**
     * Get tags
     */
    getTags(): Observable<InventoryTag[]>
    {
        return this._httpClient.get<InventoryTag[]>('api/apps/ecommerce/inventory/tags').pipe(
            tap((tags) => {
                this._tags.next(tags);
            })
        );
    }

    /**
     * Create tag
     *
     * @param tag
     */
    createTag(tag: InventoryTag): Observable<InventoryTag>
    {
        return this.tags$.pipe(
            take(1),
            switchMap(tags => this._httpClient.post<InventoryTag>('api/apps/ecommerce/inventory/tag', {tag}).pipe(
                map((newTag) => {

                    // Update the tags with the new tag
                    this._tags.next([...tags, newTag]);

                    // Return new tag from observable
                    return newTag;
                })
            ))
        );
    }

    /**
     * Update the tag
     *
     * @param id
     * @param tag
     */
    updateTag(id: string, tag: InventoryTag): Observable<InventoryTag>
    {
        return this.tags$.pipe(
            take(1),
            switchMap(tags => this._httpClient.patch<InventoryTag>('api/apps/ecommerce/inventory/tag', {
                id,
                tag
            }).pipe(
                map((updatedTag) => {

                    // Find the index of the updated tag
                    const index = tags.findIndex(item => item.id === id);

                    // Update the tag
                    tags[index] = updatedTag;

                    // Update the tags
                    this._tags.next(tags);

                    // Return the updated tag
                    return updatedTag;
                })
            ))
        );
    }

    /**
     * Delete the tag
     *
     * @param id
     */
    deleteTag(id: string): Observable<boolean>
    {
        return this.tags$.pipe(
            take(1),
            switchMap(tags => this._httpClient.delete('api/apps/ecommerce/inventory/tag', {params: {id}}).pipe(
                map((isDeleted: boolean) => {

                    // Find the index of the deleted tag
                    const index = tags.findIndex(item => item.id === id);

                    // Delete the tag
                    tags.splice(index, 1);

                    // Update the tags
                    this._tags.next(tags);

                    // Return the deleted status
                    return isDeleted;
                }),
                filter(isDeleted => isDeleted),
                switchMap(isDeleted => this.products$.pipe(
                    take(1),
                    map((products) => {

                        // Iterate through the contacts
                        products.forEach((product) => {

                            const tagIndex = product.tags.findIndex(tag => tag === id);

                            // If the contact has the tag, remove it
                            if ( tagIndex > -1 )
                            {
                                product.tags.splice(tagIndex, 1);
                            }
                        });

                        // Return the deleted status
                        return isDeleted;
                    })
                ))
            ))
        );
    }

    /**
     * Get vendors
     */
    getVendors(): Observable<InventoryVendor[]>
    {
        return this._httpClient.get<InventoryVendor[]>('api/apps/ecommerce/inventory/vendors').pipe(
            tap((vendors) => {
                this._vendors.next(vendors);
            })
        );
    }

    /**
     * Update the avatar of the given contact
     *
     * @param id
     * @param avatar
     */
    /*uploadAvatar(id: string, avatar: File): Observable<Contact>
    {
        return this.contacts$.pipe(
            take(1),
            switchMap(contacts => this._httpClient.post<Contact>('api/apps/contacts/avatar', {
                id,
                avatar
            }, {
                headers: {
                    'Content-Type': avatar.type
                }
            }).pipe(
                map((updatedContact) => {

                    // Find the index of the updated contact
                    const index = contacts.findIndex(item => item.id === id);

                    // Update the contact
                    contacts[index] = updatedContact;

                    // Update the contacts
                    this._contacts.next(contacts);

                    // Return the updated contact
                    return updatedContact;
                }),
                switchMap(updatedContact => this.contact$.pipe(
                    take(1),
                    filter(item => item && item.id === id),
                    tap(() => {

                        // Update the contact if it's selected
                        this._contact.next(updatedContact);

                        // Return the updated contact
                        return updatedContact;
                    })
                ))
            ))
        );
    }*/

}
