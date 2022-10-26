export namespace main {
	
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
	export class Task {
	    mainBlockId: number;
	    title: string;
	    content: string;
	    // Go type: time.Time
	    created: any;
	    createdFmt: string;
	    description: string;
	    projectId: number;
	
	    static createFrom(source: any = {}) {
	        return new Task(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.mainBlockId = source["mainBlockId"];
	        this.title = source["title"];
	        this.content = source["content"];
	        this.created = this.convertValues(source["created"], null);
	        this.createdFmt = source["createdFmt"];
	        this.description = source["description"];
	        this.projectId = source["projectId"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

