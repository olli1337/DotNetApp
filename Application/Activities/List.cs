using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> {}

        public class Handler : IRequestHandler<Query, List<Activity>>
        {

            private readonly DataContext _context;
        private readonly ILogger<List> _logger;

            public Handler(DataContext context, ILogger<List> logger)
            {
                _logger = logger;
                _context = context;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {

                try {
                    cancellationToken.ThrowIfCancellationRequested();                    
                } catch (Exception ex) when (ex is TaskCanceledException) {
                    _logger.LogInformation("Task was cancelled!");
                }

                return await _context.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}