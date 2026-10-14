import {getDb} from '../../../db';
import {content} from '../../../db/schema';
import initial from '../../../components/content.json';
import {contentSchema} from '../../../components/validation';
import {getChatGPTUser} from '../../chatgpt-auth';
export async function GET(){try{const r=await getDb().select().from(content);return Response.json(r.length?JSON.parse(r[0].value):initial,{headers:{'Cache-Control':'no-store'}});}catch{return Response.json({error:'Content unavailable'}, {status:503});}}
// The Site is deployed owner-private. Platform access plus authenticated identity protects this studio.
// Before broadening the audience, replace this boundary with explicit administrator membership.
export async function PUT(req:Request){if(!await getChatGPTUser())return new Response('Unauthorized',{status:401});if(req.headers.get('origin')!==new URL(req.url).origin)return new Response('Forbidden',{status:403});try{const raw=await req.text();if(raw.length>500000)return new Response('Content too large',{status:413});const d=contentSchema.parse(JSON.parse(raw));await getDb().insert(content).values({id:'main',value:JSON.stringify(d)}).onConflictDoUpdate({target:content.id,set:{value:JSON.stringify(d)}});return Response.json({ok:true});}catch{return Response.json({error:'Could not save. Check all fields and try again.'},{status:400});}}
