import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Validate imaging processing middleware', () => {
  it('should return status 200 for /api/images with valid query', async () => {
    const response = await request.get(
      '/api/images?filename=manutd&width=800&height=600'
    );
    expect(response.status).toBe(200);
  });

  describe('Test /images for error handling', () => {
    it('should handle error for missing or invalid query string parameters', async () => {
      const response = await request.get('/api/images');
      expect(response.status).toBe(400);
    });

    it('should handle error for query file not found', async () => {
      const response = await request.get(
        '/api/images?filename=missing&width=800&height=600'
      );
      expect(response.status).toBe(400);
    });
  });
});
