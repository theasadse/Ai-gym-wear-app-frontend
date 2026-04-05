# PulseFit Frontend – API Integration (Local FastAPI backend)

We are integrating against the local FastAPI backend running at `http://localhost:8000`.

## Base URLs
- Public catalog/recs: `NEXT_PUBLIC_API_BASE=http://localhost:8000`
- Chat proxy target (server-side only): `AI_API_URL=http://localhost:8000/chat`
- Docs: `http://localhost:8000/docs`
- Health: `http://localhost:8000/health`

## Data shapes
### Product
```json
{
  "id": "string",
  "name": "string",
  "price": 0,
  "category": "Tops|Bottoms|Sets|Outerwear|Footwear|…",
  "description": "string",
  "colors": ["string"],
  "tags": ["string"],
  "rating": 4.6,
  "image": "https://…",
  "stock": 10,
  "featured": true,
  "newArrival": false,
  "sizes": "XS,S,M,L,XL"
}
```

### Chat reply
```json
{ "reply": "string" }
```

## Endpoints the frontend calls

1) **GET `/products`** (also available at `/api/products`)
- Query params: `search`, `category`, `tag`, `size` (optional).
- Response: `Product[]`.
- Used by: catalog page, featured/new-arrival sections.

2) **GET `/recommendations`** (also `/api/recommendations`)
- Query params: `userId` (optional).
- Response: `Product[]` (featured fallback is OK).
- Used by: home carousel, profile recommendations.

3) **POST `/chat`** (also `/api/chat`)
- Body:
```json
{ "message": "string", "history": [ { "role": "user|assistant", "content": "string" } ] }
```
- Response: `{ "reply": "string" }`.
- Used by: frontend `/api/chat` proxy which forwards request and returns the reply.

## Error handling
- Non-2xx should return `{ "error": "message" }`.
- Frontend shows a friendly fallback if chat fails.

## CORS
- Backend has CORS enabled. Include the frontend origin in `ALLOWED_ORIGINS` env when deployed.

## Images
- Product `image` must be an absolute URL. Allowed domains in `next.config.ts`: `images.unsplash.com`, `images.pexels.com`. Add more there if backend returns other domains.

## Optional
- Pagination not required today; if added, use `?page` & `?limit` and include `total`.
- Auth can be bearer tokens; keep chat key server-side only.
