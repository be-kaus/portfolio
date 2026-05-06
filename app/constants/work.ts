import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2021',
    title: 'Sagar Public School',
    subtitle: 'Higher Secondary | 72%',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2023',
    title: 'LNCT Bhopal',
    subtitle: 'B.Tech CS&E | CGPA: 6.3',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: 'Sep 2024',
    title: 'Sarasniyam',
    subtitle: 'Developer Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: 'Aug 2025',
    title: 'Builtattic',
    subtitle: 'Junior Associate',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Future',
    subtitle: 'Full-Stack Developer',
    position: 'right',
  }
]