import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExampleInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
): Observable<HttpEvent<unknown>> {
    let token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJiYWFhY2UxMy04MzY0LTRhMjItOTEyYy0xYWQ3ZGY5MDc3OTEiLCJzdWIiOiJhcHBhZG1pbkBkZW1vLmlmbTM2MC5jb20iLCJnaXZlbl9uYW1lIjoiQXBwIiwiZmFtaWx5X25hbWUiOiJBZG1pbiIsImVtYWlsIjoiYXBwYWRtaW5AZGVtby5pZm0zNjAuY29tIiwianRpIjoiMDdjODBjNDctNDBkMS00NmEwLTkwMWUtNTJhMmY0ZmE0MTBkIiwiVXNlclBlcm1pc3Npb25zIjoiVXNlcixQcm9qZWN0LFByb2plY3QsVmVuZG9yLFByb2plY3QsQ29zdEV2ZW50LEludm9pY2UsUHJvamVjdCxCdWRnZXRJdGVtLENvc3RFdmVudCxDb3N0RXZlbnRSZWFzb24sQ29zdEV2ZW50UmVhc29uLFByb2plY3QsVXNlcixWZW5kb3IsQ29zdEV2ZW50LENvbnRyYWN0VHlwZSxQcm9qZWN0LEN1c3RvbWVyLFByb2plY3QsUHJvamVjdCxUb2tlbixDb3N0RXZlbnQsQnVkZ2V0SXRlbSxDdXN0b21lcixQcm9qZWN0LFByb2plY3RUeXBlLFByb2plY3QsVXNlcixQcm9qZWN0VHlwZSxQcm9qZWN0LFByb2dyYW0sQnVkZ2V0SXRlbSxWZW5kb3IsU2VydmljZVR5cGUsVXNlcixQcm9qZWN0VHlwZSxCdWRnZXRJdGVtLEJ1ZGdldFRlbXBsYXRlLFByb2plY3QsUHJvamVjdCxQcm9qZWN0LENvc3RFdmVudCxQcm9qZWN0LENsaWVudCxQcm9ncmFtLFRva2VuLERhc2hCb2FyZCxVc2VyLEludm9pY2UsQ29zdEV2ZW50LFVzZXIsVXNlcixQcm9qZWN0LFByb2plY3QsQ29zdEV2ZW50LFVzZXIsUHJvamVjdCxQcm9qZWN0LENvc3RFdmVudCxQcm9qZWN0LFZlbmRvcixDdXN0b21lcixDb250cmFjdFR5cGUsQ29zdEV2ZW50UmVhc29uLFByb2plY3QsQnVkZ2V0VGVtcGxhdGUsVmVuZG9yLFJlcG9ydCxQcm9qZWN0LFByb2plY3QsVXNlcixCdWRnZXRJdGVtLFJlcG9ydCxSZXBvcnQsUHJvamVjdCxDb3N0RXZlbnQsU2VydmljZVR5cGUsSW52b2ljZSxQcm9qZWN0LFVzZXIsUHJvamVjdCxDb3N0RXZlbnQsUHJvZ3JhbSxDb250cmFjdFR5cGUsUmVwb3J0LFNlcnZpY2VUeXBlLFByb2dyYW0sVmVuZG9yLEZpbGUsQnVkZ2V0SXRlbSxVc2VyLFByb2plY3QsUHJvamVjdCxQcm9qZWN0VHlwZSxQcm9qZWN0LFByb2plY3QsUHJvZ3JhbSxQcm9qZWN0VHlwZSxGaWxlLFByb2dyYW1UeXBlLEJ1ZGdldEl0ZW0sU2VydmljZVR5cGUsUHJvamVjdFR5cGUsQ29zdEV2ZW50LEJ1ZGdldFRlbXBsYXRlLEJ1ZGdldEl0ZW0sQ29udHJhY3RUeXBlLFByb2plY3QsUmVwb3J0LEludm9pY2UsQ29udHJhY3RUeXBlLERhc2hib2FyZCxDdXN0b21lcixTZXJ2aWNlVHlwZSxGaWxlLFByb2dyYW0sUmVwb3J0LENvc3RFdmVudFJlYXNvbixEYXNoQm9hcmQsUHJvamVjdCxJbnZvaWNlLENvc3RFdmVudCxCdWRnZXRUZW1wbGF0ZSxGaWxlLENvbnRyYWN0VHlwZSxDb3N0RXZlbnRSZWFzb24sVXNlcixQcm9qZWN0LFNlcnZpY2VUeXBlLFByb2plY3QsUmVwb3J0LFVzZXIsQ3VzdG9tZXIsUHJvamVjdCxQcm9qZWN0LENvc3RFdmVudFJlYXNvbixCdWRnZXRUZW1wbGF0ZSxQcm9qZWN0LFJlbW92ZVVzZXJzRnJvbVJvbGUsRWRpdENvbnRhY3QsR2V0UHJvamVjdERldGFpbHNCeUlELERlbGV0ZVZlbmRvcixHZXRQb3RlbnRpYWxDb3N0QnlDYXRlZ29yeUlkLEdldENvc3RFdmVudENvbnRyYWN0cyxHZXRBbkludm9pY2UsRWRpdElzc3VlLEVkaXRCdWRnZXRJdGVtLEdldFVubWFwcGVkQ0NEQ29zdEV2ZW50cyxBZGRDb3N0RXZlbnRSZWFzb24sR2V0QUNvc3RFdmVudFJlYXNvbixHZXRJc3N1ZXNGb3JBbGxQcm9qZWN0cyxBZGRVc2VyQnlDbGllbnQsRWRpdFZlbmRvcixSZXZpZXdBY3Rpb24sQWN0aXZhdGUsR2V0QWxsUHJvamVjdHMsR2V0Q3VzdG9tZXJMb2dvLERlbGV0ZUZpbGUsR2V0U2NoZWR1bGVCeVByb2plY3RJRCxDaGFuZ2VEaXJlY3RvcnksQ3JlYXRlQ29zdEV2ZW50LENyZWF0ZUJ1ZGdldEl0ZW0sR2V0SW52b2ljZUFkZGl0aW9uYWxGaWVsZHMsQWRkUHJvamVjdCxHZXRBbGxQcm9qZWN0VHlwZXMsRGVsZXRlQ29udGFjdCxHZXRBbGxNZW51cyxEZWFjdGl2YXRlUHJvamVjdFR5cGUsR2V0QVN0YXR1c1JlcG9ydCxHZXRQcm9qZWN0QnlQcm9ncmFtSWQsRWRpdFByb2plY3RCdWRnZXRJdGVtLEFjdGl2YXRlVmVuZG9yLERlYWN0aXZhdGUsR2V0Q2xpZW50Um9sZXMsRWRpdFByb2plY3RUeXBlLERlbGV0ZUJ1ZGdldEl0ZW0sQ3JlYXRlQnVkZ2V0VGVtcGxhdGUsR2V0U3RhdHVzUmVwb3J0c0J5UHJvamVjdElkLEFjdGl2YXRlUHJvamVjdCxHZXRGaWxlLEdldENvc3RFdmVudENvbnRpbmdlbmNpZXMsQWRkRmlsZXMsQ2xpZW50U3BhY2VVdGlsaXphdGlvbixBY3RpdmF0ZVByb2dyYW0sR2V0RGlyZWN0b3J5LEdldE9wZW5Jc3N1ZXMsQ2hhbmdlUGFzc3dvcmQsR2V0SW52b2ljZUJ5UHJvamVjdElkLEdldENvc3RFdmVudERldGFpbEJ5SWQsR2V0VXNlcnNCeUNsaWVudCxHZXRVc2Vyc0J5Um9sZSxBZGRTdGF0dXNSZXBvcnQsR2V0UG90ZW50aWFsQ29zdEJ5UHJvamVjdElELEdldENvc3RFdmVudENoYW5nZU9yZGVycyxBY3RpdmF0ZURlbGV0ZWRVc2VyLEVkaXRQcm9qZWN0LEdldFBvdGVudGlhbENvc3RCeUlzc3VlSWQsR2V0Q29zdEV2ZW50QnlQcm9qZWN0SWQsU2NoZWR1bGVUYXJnZXRzLEdldEFsbFZlbmRvcnMsR2V0UHJvamVjdEtleURhdGVzLEFkZENvbnRyYWN0VHlwZSxHZXRBbGxDb3N0RXZlbnRSZWFzb25zLEFkZElzc3VlLERlbGV0ZUJ1ZGdldFRlbXBsYXRlLEdldEFWZW5kb3IsR2V0RG9jUmV2aWV3TG9ncyxHZXRQb3RlbnRpYWxDb3N0QnlOdW1iZXIsR2V0U3RhdHVzUmVwb3J0QnlTdGF0dXNSZXBvcnROdW1iZXIsR2V0VXNlcnNCeUNsaWVudCxHZXRCdWRnZXRJdGVtc0J5UHJvamVjdElkLEdldFByb2plY3RXZWVrbHlSZXBvcnQsR2V0SXNzdWVMb2dzLEZpbGVzTGlzdCxHZXRTdWNjZXNzb3JTdGF0ZXNCeVByZXNlbnRTdGF0ZSxBY3RpdmF0ZSxFZGl0SW52b2ljZSxHZXRTY2hlZHVsZXNGb3JBbGxQcm9qZWN0cyxHZXRDbGllbnRVc2VyQnlVc2VySUQsR2V0UHJvZ3JhbXMsR2V0UHJvamVjdENvc3RFdmVudEJ5QnVkZ2V0SXRlbUlkLEdldFByb2dyYW1CeUlkLEdldEFDb250cmFjdFR5cGUsR2V0UE1Bc3NpZ25tZW50cyxHZXRBU2VydmljZVR5cGUsRGVsZXRlUHJvZ3JhbSxBZGRWZW5kb3IsUHJvY2Vzc1NjaGVkdWxlLEdldEFsbEJ1ZGdldEl0ZW1zLEFkZFVzZXJBbmRSb2xlLERlbGV0ZVByb2plY3QsR2V0U3RhdHVzUmVwb3J0c0J5UHJvamVjdElkLEFkZFByb2plY3RUeXBlLEdldENvbnRhY3QsQWRkQ29udGFjdCxFZGl0UHJvZ3JhbSxHZXRBUHJvamVjdFR5cGUsR2V0RmlsZXMsR2V0QWxsUHJvamVjdFR5cGVzQnlQcm9ncmFtVHlwZSxHZXRBbGxCdWRnZXRJdGVtc0J5VGVtcGxhdGVJZCxFZGl0U2VydmljZVR5cGUsQWN0aXZhdGVQcm9qZWN0VHlwZSxHZXRBbGxDb3N0RXZlbnRzLEdldEFsbEJ1ZGdldFRlbXBsYXRlcyxHZXRCdWRnZXRJdGVtRGV0YWlsQnlJZCxEZWFjdGl2YXRlLEdldFN0YXR1c1JlcG9ydFdpdGhQcm9qZWN0QnlTdGF0dXNSZXBvcnROdW1iZXIsR2V0Q09uQ1JMb2csQWRkSW52b2ljZSxFZGl0Q29udHJhY3RUeXBlLEdldEFjdGl2ZVByb2plY3RzLEdldFByb2plY3RBZGRpdGlvbmFsVGV4dHMsR2V0QWxsU2VydmljZVR5cGVzLEFub21hbHksQWRkUHJvZ3JhbSxHZXRQTUFjdGl2aXRpZXMsRGVhY3RpdmF0ZSxHZXRQcm9qZWN0VG9Eb3MsUHJvamVjdEZpbGVzTGlzdCxHZXRBbGxJbnZvaWNlcyxFZGl0Q29zdEV2ZW50LEVkaXRCdWRnZXRUZW1wbGF0ZSxJbXBvcnRTY2hlZHVsZUZpbGUsR2V0QWxsQ29udHJhY3RUeXBlcyxFZGl0Q29zdEV2ZW50UmVhc29uLERlbGV0ZVVzZXIsR2V0SXNzdWVCeUlzc3VlTnVtYmVyLEFkZFNlcnZpY2VUeXBlLEdldFBvdGVudGlhbENvc3RCeVR5cGVJZCxHZXRQcm9ncmFtTW9udGhseVJlcG9ydCxFZGl0Q2xpZW50VXNlcixHZXRDdXN0b21lclNldHRpbmdzLEdldEFsbElzc3Vlc0J5UHJvamVjdElkLEVkaXRTdGF0dXNSZXBvcnQsQWN0aXZhdGUsR2V0QnVkZ2V0VGVtcGxhdGVEZXRhaWxCeUlkLEdldEFsbENvbnRhY3RzQnlQcm9qZWN0SWQiLCJVc2VySUQiOiJiYWFhY2UxMy04MzY0LTRhMjItOTEyYy0xYWQ3ZGY5MDc3OTEiLCJDbGllbnRJRCI6ImVhNzMzZmIxLTgxNzQtNGE2MS1mZDE0LTA4ZDYxODk3MzgwYyIsImV4cCI6MTY4MzAwNzQ4MSwiaXNzIjoiaHR0cDovL2NtaS1vZm0yLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHA6Ly9jbWktb2ZtMi5henVyZXdlYnNpdGVzLm5ldC8ifQ.AZ9GvWcOeLDTe1uOL5lY7a2csleFt3N8P1Rmckx3zbY';
    const req = request.clone({
        headers: request.headers.set('Authorization', `${token}`),
    });
    return next.handle(req);
}
}
