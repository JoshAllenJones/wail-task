export namespace main {
	
	export class Task {
	    title: string;
	    description: string;
	
	    static createFrom(source: any = {}) {
	        return new Task(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.description = source["description"];
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

