'use strict';

import { getPositionForNewDashCard } from 'metabase/lib/dashboard_grid';


describe('dashboard_grid', () => {
    describe('getPositionForNewDashCard', () => {
        it('should default size to 2x2 and place first card at 0,0', () => {
            expect(getPositionForNewDashCard([])).toEqual(pos(0,0));
        });
        it('should place card at correct locations on the first row', () => {
            expect(getPositionForNewDashCard([pos(0,0)])).toEqual(pos(2,0));
            expect(getPositionForNewDashCard([pos(1,0)])).toEqual(pos(3,0));
            expect(getPositionForNewDashCard([pos(0,0), pos(2,0)])).toEqual(pos(4,0));
            expect(getPositionForNewDashCard([pos(1,0), pos(5,0)])).toEqual(pos(3,0));
        });
        it('should place card at correct locations on the second row', () => {
            expect(getPositionForNewDashCard([pos(0,0), pos(2,0), pos(4,0)])).toEqual(pos(0,2));
            expect(getPositionForNewDashCard([pos(1,0), pos(4,0)])).toEqual(pos(0,2));
        });
        it('should place card correctly with non-default sizes', () => {
            expect(getPositionForNewDashCard([pos(1,0,2,4), pos(4,0)])).toEqual(pos(3,2));
            expect(getPositionForNewDashCard([pos(0,0,3,1), pos(4,0,2,1)])).toEqual(pos(0,1));
        });
    });
});

// shorthand for creating a position object, default to 2x2
function pos(col, row, sizeX = 2, sizeY = 2) {
    return { col, row, sizeX, sizeY }
}
