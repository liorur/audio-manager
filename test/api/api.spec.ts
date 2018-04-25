const request = require('supertest');
const {server, app} = require(__dirname + '/../../src/server/server').initServer();

describe('api', () => {
    describe('loading express', () => {
        beforeEach(() => {

        });
        afterEach(done => {
            server.close(done);
        });
        it('responds to /api/podcast_search', async () => {
            console.log('request')
            const response = await request(app).get('/api/podcast_search');
            console.log(response)
            expect(response.statusCode).toBe(200);
        });
        // it('404 everything else', (done) => {
        //     console.log('test 404')
        //     request(server)
        //         .get('/foo/bar')
        //         .expect(404, done);
        // });

        afterAll(done => {
            console.log('closing server')
            server.close(done);
        });
    })
    ;
});
