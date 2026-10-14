import {z} from 'zod';
const short=z.string().trim().max(250);
const text=z.string().trim().max(10000);
const slug=z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(180);
const service=z.object({title:short.min(1),slug,summary:text,problem:text,features:z.array(short).max(30),technologies:z.array(short).max(30),suitable:short,active:z.boolean()});
const solution=z.object({title:short.min(1),slug,summary:text,workflow:z.array(short).min(1).max(20),services:z.array(slug).max(100)});
const project=z.object({title:short.min(1),slug,category:short,summary:text,description:text});
export const contentSchema=z.object({services:z.array(service).max(100),solutions:z.array(solution).max(100),projects:z.array(project).max(100),team:z.array(z.object({name:short.min(1),role:short,bio:text})).max(100),contact:z.object({email:z.union([z.literal(''),z.string().email().max(200)]),phone:short,location:short})}).refine(d=>new Set(d.services.map(s=>s.slug)).size===d.services.length,'Service URLs must be unique').refine(d=>new Set(d.projects.map(s=>s.slug)).size===d.projects.length,'Project URLs must be unique');
export const enquirySchema=z.object({name:short.min(1),email:z.string().trim().email().max(200),company:short.optional(),phone:z.string().max(30).optional(),service:short.optional(),budget:short.optional(),timeline:short.optional(),brief:text.min(10),consent:z.literal('on')});
