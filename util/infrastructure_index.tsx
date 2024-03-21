import type { Infrastructure } from '@/components/infrastructure/infrastructureProps';

//
//live infrastructures
import monetaJson from "../content/infrastructures/moneta.json" assert { type: 'json' };
const moneta: Infrastructure = monetaJson as Infrastructure;

export const allInfrastructures: Infrastructure[] = [moneta];