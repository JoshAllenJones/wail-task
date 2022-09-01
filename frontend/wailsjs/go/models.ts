export namespace main {
	
	export class Task {
	    mainBlockId: number;
	    title: string;
	    description: string;
	    projectId: number;
	
	    static createFrom(source: any = {}) {
	        return new Task(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.mainBlockId = source["mainBlockId"];
	        this.title = source["title"];
	        this.description = source["description"];
	        this.projectId = source["projectId"];
	    }
	}
	export class ProjectStructQuery {
	    id: number;
	    title: string;
	
	    static createFrom(source: any = {}) {
	        return new ProjectStructQuery(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.title = source["title"];
	    }
	}

}

