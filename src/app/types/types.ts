interface Project {
    id: number;
    title: string;
    description: string;
    status: string;
    grade: string;
    image: string;
    stacks: Stack[];
}

interface Stack {
    id: number;
    name: string;
    logo: string;  
    url: string;
}

export type { Project, Stack };