const assert = require('chai').assert();
// const KQ = require()

describe('Test case', () => {
    // it('1 ô chỉ đi được 1 lượt: ', () => {
    //     let result = 'Lỗi: ô dã có lượt đánh';
    //     assert.equal(KQ, result)
    // })

    it('x Win!', () => {
        let result = 'x win';
        let table = 'xxxxx\n' + '.o.o.\n' + '.....' + '..o..\n' + '..oo.\n';  

        assert.equal(KQ(table), result);
    })

    it('x Win!', () => {
        let result = 'x win';
        let table = 'x....\n' + 'xo.o.\n' + 'x....' + 'x.o..\n' + 'x.oo.\n';  

        assert.equal(KQ(table), result);
    })

    it('x Win!', () => {
        let result = 'x win';
        let table = 'x....\n' + 'ox.o.\n' + '..x..' + '.oox.\n' + '..o.x\n';  

        assert.equal(KQ(table), result);
    })

    it('x Win!', () => {
        let result = 'x win';
        let table = '....x\n' + '.o.xo\n' + '..x..' + '.xo..\n' + 'x.oo.\n';  

        assert.equal(KQ(table), result);
    })

    it('o Win!', () => {
        let result = 'o win';
        let table = 'ooooo\n' + '.x.x.\n' + '.....' + '..x..\n' + '..xx.\n';  

        assert.equal(KQ(table), result);
    })

    it('o Win!', () => {
        let result = 'o win';
        let table = 'o....\n' + 'ox.x.\n' + 'o....' + 'o.x..\n' + 'o.xx.\n';  

        assert.equal(KQ(table), result);
    })

    it('o Win!', () => {
        let result = 'o win';
        let table = 'o....\n' + 'xo.x.\n' + '..o..' + '.xxo.\n' + '..x.o\n';  

        assert.equal(KQ(table), result);
    })

    it('o Win!', () => {
        let result = 'o win';
        let table = '....o\n' + '.x.ox\n' + '..o..' + '.ox..\n' + 'o.xx.\n';  

        assert.equal(KQ(table), result);
    })

    it('Không đi theo lượt', () => {
        let result = 'Lỗi: Số lượng x, o không đúng';
        let table = 'xxxxx\n' + '.....\n' + '.....\n' + '.....\n' + '.....\n' 
        assert.equal(KQ, result);
    })

    it('Không đi theo lượt', () => {
        let result = 'Lỗi: Số lượng x, o không đúng';
        let table = 'ooooo\n' + '.....\n' + '.....\n' + '.....\n' + '.....\n' 
        assert.equal(KQ, result);
    })

    it('2 người chơi', () => {
        let result = 'Tồn tại x, o';
        assert.equal(KQ, result);
    })

})