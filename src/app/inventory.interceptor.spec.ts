import { TestBed } from '@angular/core/testing';

import { InventoryInterceptor } from './modules/admin/apps/ecommerce/inventory.interceptor';

describe('InventoryInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InventoryInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InventoryInterceptor = TestBed.inject(InventoryInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
