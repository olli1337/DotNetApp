using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest {
            public Activity Activity {get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            
        private readonly DataContext _context;
        private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;   
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {

                // Fetch the correct activity object from the DB
                var activity = await _context.Activities.FindAsync(request.Activity.Id);
                // Set/map the database object (Activity) fields to match the request body object (Activity) fields
                _mapper.Map(request.Activity, activity);
                // Save changes and return
                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}